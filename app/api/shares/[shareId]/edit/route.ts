import { GetShareFormDetailUsecase } from '@/application/usecases/share/GetShareFormDetailUsecase';
import { HttpError } from '@/errors/HttpError';
import { PrismaShareRepository } from "@/infra/repositories/prisma/share/PrismaShareRepository";
import { getToken } from "next-auth/jwt";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ shareId: string }> },
) {
  try {
    const { shareId } = await params;
    const token = await getToken({ req });
    const userId = token?.id as string;

    const shareRepo = new PrismaShareRepository();
    const getShareFormDetailUsecase = new GetShareFormDetailUsecase(shareRepo);

    const result = await getShareFormDetailUsecase.execute(Number(shareId), userId);
    
    return NextResponse.json(
      { result },
      { status : 200}
    );
  } catch (error) {
    if (error instanceof HttpError){
      return NextResponse.json(
        { message : error.message },
        { status: error.status }
      )
    }

    if (error instanceof Error) {
      console.error(error);
      return NextResponse.json(
        { message: "나눔 데이터 조회 실패" },
        { status: 400 },
      );
    }

    return NextResponse.json({ message: "다시 시도해주세요" }, { status: 500 });
  }
}
