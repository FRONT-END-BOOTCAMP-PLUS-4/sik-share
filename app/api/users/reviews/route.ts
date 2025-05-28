import { GetUserReviewsDto } from "@/application/usecases/user/dto/GetUserReviewsDto";
import { GetUserReviewsUsecase } from "@/application/usecases/user/GetUserReviewsUsecase";
import { PrismaUserRepository } from "@/infra/repositories/prisma/PrismaUserRepository";
import { PrismaReviewRepository } from "@/infra/repositories/prisma/review/PrismaReviewRepository";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try{
        const url = new URL(req.url);
        const searchParams = url.searchParams;

        const publicId = searchParams.get("publicId");
        const page = Number(searchParams.get("page") || "0");
        const itemsPerPage = Number(searchParams.get("itemsPerPage") || "20");

        const getUserReviewsDto = new GetUserReviewsDto(
            Number(publicId),
            page,
            itemsPerPage,
        );
        const userRepo = new PrismaUserRepository();
        const reviewRepo = new PrismaReviewRepository();
        const getUserReviewsUsecase = new GetUserReviewsUsecase(userRepo, reviewRepo);
        const result = await getUserReviewsUsecase.execute(getUserReviewsDto);
        
        return NextResponse.json({ success: true, result }, { status: 200 });
    } catch(error) {
        console.error("리뷰 조회 실패", error);
        return NextResponse.json({ success: false, error: "리뷰 조회 실패" }, { status: 500 });
    }
}