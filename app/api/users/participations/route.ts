import { GetUserHistoryDto } from "@/application/usecases/user/dto/GetUserHistoryDto";
import { GetUserParticipationsUsecase } from "@/application/usecases/user/GetUserParticipationsUsecase";
import { PrismaGroupBuyRepository } from "@/infra/repositories/prisma/group-buy/PrismaGroupBuyRepository";
import { PrismaUserRepository } from "@/infra/repositories/prisma/PrismaUserRepository";
import { PrismaShareRepository } from "@/infra/repositories/prisma/share/PrismaShareRepository";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    const publicId = searchParams.get("publicId");
    const status = searchParams.get("status") as
      | "share"
      | "group-buy";
    const page = Number(searchParams.get("page") || "0");
    const itemsPerPage = Number(searchParams.get("itemsPerPage") || "20");

    const getUserHistoryDto = new GetUserHistoryDto(
      Number(publicId),
      status,
      page,
      itemsPerPage,
    );

    const userRepo = new PrismaUserRepository();
    const shareRepo = new PrismaShareRepository();
    const groupBuysRepo = new PrismaGroupBuyRepository();
    const getUserParticipationsUsecase = new GetUserParticipationsUsecase(userRepo,shareRepo,groupBuysRepo);
    const result = await getUserParticipationsUsecase.execute(getUserHistoryDto);

    return NextResponse.json({ success: true, result }, { status: 200 });
  } catch (error) {
    console.error("참여 내역 조회 실패", error);
    return NextResponse.json({ success: false, error: "참여 내역 조회 실패" }, { status: 500 });
  }
}
