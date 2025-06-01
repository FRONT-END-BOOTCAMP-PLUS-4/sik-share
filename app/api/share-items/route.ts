import { GetShareItemUsecase } from "@/application/usecases/share/GetShareItemsUsecase";
import { PrismaShareItemRepository } from "@/infra/repositories/prisma/share/PrismaShareItemRepository";
import { PrismaShareRepository } from '@/infra/repositories/prisma/share/PrismaShareRepository';
import { getToken } from "next-auth/jwt";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req });
    const userId = token?.id as string;

    const shareItemRepo = new PrismaShareItemRepository();
    const shareRepo = new PrismaShareRepository();
    const getShareItemUsecase = new GetShareItemUsecase(shareItemRepo, shareRepo);

    const result = await getShareItemUsecase.execute(userId);

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message || "나눔 아이템 조회 실패" },
        { status: 400 },
      );
    }

    return NextResponse.json({ message: "다시 시도해주세요" }, { status: 500 });
  }
}
