import { NextResponse } from "next/server";
import { PrismaGroupBuyRepository } from "@/infra/repositories/prisma/group-buy/PrismaGroupBuyRepository";
import { GetGroupBuyCountUsecase } from "@/application/usecases/group-buy/GetGroupBuyCountUsecase";

export async function GET() {
  try {
    const repo = new PrismaGroupBuyRepository();
    const usecase = new GetGroupBuyCountUsecase(repo);
    const count = await usecase.execute();
    return NextResponse.json({ count });
  } catch (e) {
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
