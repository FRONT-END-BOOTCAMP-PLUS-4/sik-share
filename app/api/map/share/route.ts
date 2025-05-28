import { NextResponse } from "next/server";
import { PrismaShareRepository } from "@/infra/repositories/prisma/share/PrismaShareRepository";
import { GetShareListUsecase } from "@/application/usecases/share/GetShareListUsecase";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page") || "0");
    const itemsPerPage = Number(searchParams.get("itemsPerPage") || "20");
    const neighborhoodId = Number(searchParams.get("neighborhoodId"));

    if (!neighborhoodId) {
      return NextResponse.json({ error: "neighborhoodId 누락" }, { status: 400 });
    }

    const shareRepo = new PrismaShareRepository();
    const getShares = new GetShareListUsecase(shareRepo);

    const shares = await getShares.execute({ page, itemsPerPage, neighborhoodId });

    return NextResponse.json({ message: "조회 성공", shares }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "서버 에러" }, { status: 500 });
  }
}
