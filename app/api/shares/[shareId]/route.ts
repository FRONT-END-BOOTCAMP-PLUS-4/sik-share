import { NextResponse } from "next/server";
import { PrismaShareRepository } from "@/infra/repositories/prisma/share/PrismaShareRepository";
import { GetShareDetailUsecase } from "@/application/usecases/share/GetShareDetailUsecase";

export async function GET(_: Request, context: { params: { shareId: string } }) {
  try {
    const shareId = Number(context.params.shareId);

    if (Number.isNaN(shareId)) {
      return NextResponse.json({ error: "잘못된 ID" }, { status: 400 });
    }

    const repo = new PrismaShareRepository();
    const usecase = new GetShareDetailUsecase(repo);
    const result = await usecase.execute(shareId);

    return NextResponse.json({ message: "조회 성공", data: result });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 에러" }, { status: 500 });
  }
}
