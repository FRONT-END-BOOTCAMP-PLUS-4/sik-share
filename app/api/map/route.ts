import { NextResponse } from "next/server";
import { PrismaClusterRepository } from "@/infra/repositories/prisma/PrismaClusterRepository";
import { GetClusterDataUsecase } from "@/application/usecases/map/GetClusterDataUsecase";

export async function GET() {
  try {
    const repo = new PrismaClusterRepository();
    const getClusters = new GetClusterDataUsecase(repo);

    const clusters = await getClusters.execute();

    return NextResponse.json({ clusters }, { status: 200 });
  } catch (error) {
    console.error("Cluster API Error:", error);
    return NextResponse.json({ error: "서버 에러" }, { status: 500 });
  }
}
