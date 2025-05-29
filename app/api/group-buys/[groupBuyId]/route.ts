import { NextResponse } from "next/server";
import { PrismaGroupBuyRepository } from "@/infra/repositories/prisma/group-buy/PrismaGroupBuyRepository";
import { GetGroupBuyDetailUsecase } from "@/application/usecases/group-buy/GetGroupBuyDetailUsecase";
import { DeleteGroupBuyUsecase } from "@/application/usecases/group-buy/DeleteGroupBuyUsecase";

export async function GET(_: Request, { params }: { params: Promise<{ groupBuyId: string }> }) {
  try {
    const groupBuyId = await params;

    if (Number.isNaN(groupBuyId)) {
      return NextResponse.json({ error: "잘못된 ID" }, { status: 400 });
    }

    const repo = new PrismaGroupBuyRepository();
    const usecase = new GetGroupBuyDetailUsecase(repo);
    const result = await usecase.execute(Number(groupBuyId));

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