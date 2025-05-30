import { GetUserHistoryDto } from "@/application/usecases/user/dto/GetUserHistoryDto";
import { GetUserSharesUsecase } from "@/application/usecases/user/GetUserSharesUsecase";
import { PrismaShareRepository } from "@/infra/repositories/prisma/share/PrismaShareRepository";
import { PrismaUserRepository } from "@/infra/repositories/prisma/PrismaUserRepository";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    const publicId = searchParams.get("publicId");
    const status = searchParams.get("status") as
      | "active"
      | "completed"
      | "expired";
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
    const getUserSharesUsecase = new GetUserSharesUsecase(userRepo,shareRepo);
    const result = await getUserSharesUsecase.execute(getUserHistoryDto);

    return NextResponse.json({ success: true, result }, { status: 200 });
  } catch (error) {
    console.error("나눔 내역 조회 실패", error);
    return NextResponse.json({ success: false, error: "나눔 내역 조회 실패" }, { status: 500 });
  }
}
