import { NextResponse } from "next/server";
import { PrismaShareRepository } from "@/infra/repositories/prisma/share/PrismaShareRepository";
import { GetShareCountUsecase } from "@/application/usecases/share/GetShareCountUsecase";

export async function GET() {
  try {
    const repo = new PrismaShareRepository();
    const usecase = new GetShareCountUsecase(repo);
    const count = await usecase.execute();
    return NextResponse.json({ count });
  } catch (e) {
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
