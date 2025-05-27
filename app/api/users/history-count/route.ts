import { GetUserHistoryCountDto } from "@/application/usecases/user/dto/GetUserHistoryCountDto";
import { GetUserHistoryCountUsecase } from "@/application/usecases/user/GetUserHistoryCountUsecase";
import { PrismaGroupBuyRepository } from "@/infra/repositories/prisma/group-buy/PrismaGroupBuyRepository";
import { PrismaUserRepository } from "@/infra/repositories/prisma/PrismaUserRepository";
import { PrismaReviewRepository } from "@/infra/repositories/prisma/review/PrismaReviewRepository";
import { PrismaShareRepository } from "@/infra/repositories/prisma/share/PrismaShareRepository";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    const publicId = searchParams.get("publicId");
    const type = searchParams.get("type") as "share" | "group-buy" | "participation";
    const tabType = searchParams.get("tabType") as "status" | "participation";

    const getUserHistoryCountDto = new GetUserHistoryCountDto(
      Number(publicId),
      type,
      tabType,
    );

    const userRepo = new PrismaUserRepository();
    const shareRepo = new PrismaShareRepository();
    const groupBuysRepo = new PrismaGroupBuyRepository();
    const reviewRepo = new PrismaReviewRepository();
    const getUserHistoryCountUsecase = new GetUserHistoryCountUsecase(userRepo,shareRepo,groupBuysRepo,reviewRepo);
    const result = await getUserHistoryCountUsecase.execute(getUserHistoryCountDto);

    return NextResponse.json({ success: true, result }, { status: 200 });
  } catch (error) {
    console.error("count 조회 실패", error);
    return NextResponse.json({ success: false, error: "count 조회 실패" }, { status: 500 });
  }
}
