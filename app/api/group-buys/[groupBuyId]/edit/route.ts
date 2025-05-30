import { GetGroupBuyFormDetailUsecase } from '@/application/usecases/group-buy/GetGroupBuyFormDetailUsecase';
import { HttpError } from "@/errors/HttpError";
import { PrismaGroupBuyRepository } from '@/infra/repositories/prisma/group-buy/PrismaGroupBuyRepository';
import { getToken } from "next-auth/jwt";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ groupBuyId: string }> },
) {
  try {
    const { groupBuyId } = await params;
    const token = await getToken({ req });
    const userId = token?.id as string;

    const groupBuyRepo = new PrismaGroupBuyRepository();
    const getGroupBuyFormDetailUsecase = new GetGroupBuyFormDetailUsecase(groupBuyRepo);

    const result = await getGroupBuyFormDetailUsecase.execute(Number(groupBuyId), userId);

    return NextResponse.json(
      { result },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof HttpError) {
      return NextResponse.json(
        { message: error.message },
        { status: error.status },
      );
    }

    if (error instanceof Error) {
      console.error(error);
      return NextResponse.json(
        { message: "같이 장보기 데이터 조회 실패" },
        { status: 400 },
      );
    }

    return NextResponse.json({ message: "다시 시도해주세요" }, { status: 500 });
  }
}
