import { NextResponse } from "next/server";
import { PrismaGroupBuyRepository } from "@/infra/repositories/prisma/group-buy/PrismaGroupBuyRepository";
import { GetGroupBuyDetailUsecase } from "@/application/usecases/group-buy/GetGroupBuyDetailUsecase";

export async function GET(_: Request, context: { params: { groupBuyId: string } }) {
  try {
    const groupBuyId = Number(context.params.groupBuyId);

    if (Number.isNaN(groupBuyId)) {
      return NextResponse.json({ error: "잘못된 ID" }, { status: 400 });
    }

    const repo = new PrismaGroupBuyRepository();
    const usecase = new GetGroupBuyDetailUsecase(repo);
    const result = await usecase.execute(groupBuyId);

    return NextResponse.json({ message: "조회 성공", data: result });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 에러" }, { status: 500 });
  }
}
