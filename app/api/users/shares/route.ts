import { GetUserSharesDto } from "@/application/usecases/user/dto/GetUserSharesDto";
import { GetUserSharesUsecase } from "@/application/usecases/user/GetUserSharesUsecase";
import { PrismaShareRepository } from "@/infra/repositories/prisma/PrismaShareRepository";
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

    const getUserSharesDto = new GetUserSharesDto(
      Number(publicId),
      status,
      page,
      itemsPerPage,
    );

    const userRepo = new PrismaUserRepository();
    const shareRepo = new PrismaShareRepository();
    const getUserSharesUsecase = new GetUserSharesUsecase(userRepo,shareRepo);
    const shares = await getUserSharesUsecase.execute(getUserSharesDto);

    return NextResponse.json({ success: true, shares }, { status: 200 });
  } catch (error) {
    console.error("나눔 내역 조회 실패", error);
    return NextResponse.json({ success: false, error: "나눔 내역 조회 실패" }, { status: 500 });
  }
}
