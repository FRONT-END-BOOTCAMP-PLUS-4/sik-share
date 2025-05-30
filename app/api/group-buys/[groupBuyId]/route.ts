import { NextResponse } from "next/server";
import { PrismaGroupBuyRepository } from "@/infra/repositories/prisma/group-buy/PrismaGroupBuyRepository";
import { GetGroupBuyDetailUsecase } from "@/application/usecases/group-buy/GetGroupBuyDetailUsecase";
import { DeleteGroupBuyUsecase } from "@/application/usecases/group-buy/DeleteGroupBuyUsecase";
import { HttpError } from '@/errors/HttpError';
import { UpdateGroupBuyDto } from '@/application/usecases/group-buy/dto/UpdateGroupBuyDto';
import { PrismaNeighborhoodRepository } from '@/infra/repositories/prisma/PrismaNeighborhoodRepository';
import { PrismaGroupBuyImageRepository } from '@/infra/repositories/prisma/group-buy/PrismaGroupBuyImageRepository';
import { SupabaseImageStorageRepository } from '@/infra/repositories/supabase/SupabaseImageRepository';
import { UpdateGroupBuyUsecase } from '@/application/usecases/group-buy/UpdateGroupBuyUsecase';

export async function GET(_: Request, { params }: { params: Promise<{ groupBuyId: string }> }) {
  try {
    const { groupBuyId } = await params;

    if (Number.isNaN(groupBuyId)) {
      return NextResponse.json({ error: "잘못된 ID" }, { status: 400 });
    }

    const repo = new PrismaGroupBuyRepository();
    const usecase = new GetGroupBuyDetailUsecase(repo);
    const result = await usecase.execute(Number(groupBuyId));

    if (!result) {
      return NextResponse.json(
        { error: "존재하지 않는 나눔 글입니다." },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "조회 성공", data: result });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 에러" }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ groupBuyId: string }>}){
  try{
    const groupBuyRepo = new PrismaGroupBuyRepository();
    const deleteGroupBuyUsecase = new DeleteGroupBuyUsecase(groupBuyRepo);

    const { groupBuyId } = await params;

    const res = await deleteGroupBuyUsecase.execute(Number(groupBuyId));

    return NextResponse.json({ success: true, message: "같이 장보기 글 삭제가 완료되었습니다." }, { status: 200 });
  } catch(error) {
    console.error("같이 장보기 글 삭제 실패", error);
    return NextResponse.json({ success: false, error: "같이 장보기 글 삭제가 실패했습니다." }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params } : { params: Promise<{ groupBuyId:string }> }){
  try{
    const { groupBuyId } = await params;

    const formData = await req.formData();

    const title = formData.get("title") as string;
    const lat = Number.parseFloat(formData.get("lat") as string);
    const lng = Number.parseFloat(formData.get("lng") as string);
    const neighborhoodName = formData.get("neighborhoodName") as string;
    const locationNote = formData.get("locationNote") as string;
    const description = formData.get("description") as string;
    const desiredItem = formData.get("desiredItem") as string;
    const meetingDate = new Date(formData.get("meetingDate") as string);
    const images = formData.getAll("images") as File[];

    const updateGroupBuyDto = new UpdateGroupBuyDto(
      Number(groupBuyId),
      title,
      lat,
      lng,
      neighborhoodName,
      locationNote,
      description,
      desiredItem,
      meetingDate,
      images,
    );

    const neighborhoodRepo = new PrismaNeighborhoodRepository();
    const groupBuyRepo = new PrismaGroupBuyRepository();
    const groupBuyImageRepo = new PrismaGroupBuyImageRepository();
    const imageStorageRepo = new SupabaseImageStorageRepository();

    const updateGroupBuyUsecase = new UpdateGroupBuyUsecase(
      neighborhoodRepo,
      groupBuyRepo,
      groupBuyImageRepo,
      imageStorageRepo,
    );

    await updateGroupBuyUsecase.execute(updateGroupBuyDto);

    return NextResponse.json(
      {message : '같이 장보기 수정 성공'},
      {status : 200}
    );
  }
  catch(error){
    if(error instanceof HttpError){
      return NextResponse.json(
        { message: error.message },
        { status: error.status }
      )
    }

    if(error instanceof Error){
      return NextResponse.json(
        { message: error.message || "같이 장보기 수정 실패"},
        { status: 400 }
      )
    }
    console.log(error);
    return NextResponse.json(
      { message: "다시 시도해주세요."},
      { status: 500 }
    )
  }
}