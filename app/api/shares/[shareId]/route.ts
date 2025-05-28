import { NextResponse } from "next/server";
import { DeleteShareUsecase } from "@/application/usecases/share/DeleteShareUsecase";
import { UpdateShareDto } from "@/application/usecases/share/dto/UpdateShareDto";
import { UpdateShareUsecase } from "@/application/usecases/share/UpdateShareUsecase";
import { PrismaNeighborhoodRepository } from "@/infra/repositories/prisma/PrismaNeighborhoodRepository";
import { PrismaShareImageRepository } from "@/infra/repositories/prisma/share/PrismaShareImageRepository";
import { PrismaShareRepository } from "@/infra/repositories/prisma/share/PrismaShareRepository";
import { SupabaseImageStorageRepository } from "@/infra/repositories/supabase/SupabaseImageRepository";

export async function PATCH(
  req: Request,
  { params: { shareId } }: { params: { shareId: string } },
) {
  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const lat = Number.parseFloat(formData.get("lat") as string);
    const lng = Number.parseFloat(formData.get("lng") as string);
    const neighborhoodName = formData.get("neighborhoodName") as string;
    const locationNote = formData.get("locationNote") as string;
    const description = formData.get("description") as string;
    const images = formData.getAll("images") as File[];

    const updateShareDto = new UpdateShareDto(
      Number(shareId),
      title,
      lat,
      lng,
      neighborhoodName,
      locationNote,
      description,
      images,
    );

    const neighborhoodRepo = new PrismaNeighborhoodRepository();
    const shareRepo = new PrismaShareRepository();
    const shareImageRepo = new PrismaShareImageRepository();
    const imageStorageRepo = new SupabaseImageStorageRepository();

    const updateShareUsecase = new UpdateShareUsecase(
      neighborhoodRepo,
      shareRepo,
      shareImageRepo,
      imageStorageRepo,
    );

    await updateShareUsecase.execute(updateShareDto);

    return NextResponse.json(
      {message : '나눔 수정 성공'},
      {status : 200}
    );
  }
  catch(error){
    if(error instanceof Error){
      return NextResponse.json(
        { message : error.message || '나눔 수정 실패' },
        { status : 400 }
      )
    }
  }
}

export async function DELETE(_: Request, { params }: { params: { shareId: string }}){
  try{
    const shareRepo = new PrismaShareRepository();
    const deleteShareUsecase = new DeleteShareUsecase(shareRepo);

    const { shareId } = await params;

    await deleteShareUsecase.execute(Number(shareId));

    return NextResponse.json({ success: true, message: "나눔 글 삭제가 완료되었습니다." }, { status: 200 });
  } catch(error) {
    console.error("나눔 글 삭제 실패", error);
    return NextResponse.json({ success: false, error: "나눔 글 삭제가 실패했습니다." }, { status: 500 });
  }
}