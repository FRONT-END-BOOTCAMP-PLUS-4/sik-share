import { GetUserSharesDto } from "@/application/usecases/user/dto/GetUserSharesDto";
import { GetUserSharesUsecase } from "@/application/usecases/user/GetUserSharesUsecase";
import { PrismaShareRepository } from "@/infra/repositories/prisma/PrismaShareRepository";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  console.log("나눔 내역 조회 API 요청", req);
  try {
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    const ownerId = searchParams.get("ownerId") ?? "";
    const status = searchParams.get("status") as
      | "active"
      | "completed"
      | "expired";
    // const page = Number.parseInt(searchParams.get("page") ?? "0", 10);
    // const itemsPerPage = Number.parseInt(
    //   searchParams.get("itemsPerPage") ?? "20",
    //   10,
    // );
    const page = Number(searchParams.get("page") || "0");
    const itemsPerPage = Number(searchParams.get("itemsPerPage") || "20");

    const getUserSharesDto = new GetUserSharesDto(
      ownerId,
      status,
      page,
      itemsPerPage,
    );

    const shareRepo = new PrismaShareRepository();
    const getUserSharesUsecase = new GetUserSharesUsecase(shareRepo);
    const shares = await getUserSharesUsecase.execute(getUserSharesDto);
    if (!shares) {
      return NextResponse.json(
        { success: false, message: "나눔 내역이 없습니다." },
        { status: 200 },
      );
    }

    console.log("나눔 내역 조회 성공", shares);
    return NextResponse.json({ success: true, shares }, { status: 200 });
  } catch (error) {
    console.error("나눔 내역 조회 실패", error);
  }
}
