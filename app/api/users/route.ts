import { NextResponse } from "next/server";
import { GetUserProfileUsecase } from "@/application/usecases/user/GetUserProfileUsecase";
import { PrismaNeighborhoodRepository } from '@/infra/repositories/prisma/PrismaNeighborhoodRepository';
import { PrismaUserRepository } from '@/infra/repositories/prisma/PrismaUserRepository';
import { GetUserShortReviewsUsecase } from "@/application/usecases/user/GetUserShortReviewsUsecase";
import { PrismaReviewRepository } from "@/infra/repositories/prisma/review/PrismaReviewRepository";
import { PrismaShortReviewOptionRepository } from "@/infra/repositories/prisma/review/PrismaShortReviewOptionRepository";
import { PrismaReviewShortReviewRepository } from "@/infra/repositories/prisma/review/PrismaReviewShortReviewRepository";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const publicId = Number(searchParams.get("id"));
    try {
      
        const userRepo = new PrismaUserRepository();
        const neighborRepo = new PrismaNeighborhoodRepository();
        const getUserProfileUsecase = new GetUserProfileUsecase(userRepo, neighborRepo);

        const reviewRepo = new PrismaReviewRepository();
        const reviewShortReviewRepo = new PrismaReviewShortReviewRepository();
        const shortReviewOptionRepo = new PrismaShortReviewOptionRepository();
        const getUserShortReviewsUsecase = new GetUserShortReviewsUsecase(userRepo, reviewRepo, reviewShortReviewRepo, shortReviewOptionRepo);

        const [ profile, shortReview ] = await Promise.all ([
          getUserProfileUsecase.execute(publicId),
          getUserShortReviewsUsecase.execute(publicId)
        ])
        
        return NextResponse.json(
            {message: '조회 성공', result: {profile, shortReview}},
            {status: 200}
        );
  } catch (error) {
    return NextResponse.json({ error: "유저 정보를 가져올 수 없습니다." }, { status: 500 });
  }
}
