import { NextResponse } from "next/server";
import { PrismaGroupBuyRepository } from "@/infra/repositories/prisma/PrismGroupBuyRepository";
import { GetGroupBuyListUsecase } from "@/application/usecases/group-buy/GetGroupBuyListUsecase";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page") || "0");
    const itemsPerPage = Number(searchParams.get("itemsPerPage") || "20");
    const neighborhoodId = Number(searchParams.get("neighborhoodId"));

    if (!neighborhoodId) {
      return NextResponse.json({ error: "neighborhoodId 누락" }, { status: 400 });
    }

    const groupBuyRepo = new PrismaGroupBuyRepository();
    const getGroupBuy = new GetGroupBuyListUsecase(groupBuyRepo);

    const groupbuy = await getGroupBuy.execute({ page, itemsPerPage, neighborhoodId });

    return NextResponse.json({ message: "조회 성공", groupbuy }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "서버 에러" }, { status: 500 });
  }
}
