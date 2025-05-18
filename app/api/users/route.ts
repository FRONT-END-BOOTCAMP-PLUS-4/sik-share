import { NextResponse } from "next/server";
import { GetUserProfileUsecase } from "@/application/usecases/user/GetUserProfileUsecase";
import { PrismaNeighborhoodRepository } from '@/infra/repositories/prisma/PrismaNeighborhoodRepository';
import { PrismaUserRepository } from '@/infra/repositories/prisma/PrismaUserRepository';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const publicId = Number(searchParams.get("id"));
    try {
      
        const userRepo = new PrismaUserRepository();
        const neighborRepo = new PrismaNeighborhoodRepository();
        const getUserProfileUsecase = new GetUserProfileUsecase(userRepo, neighborRepo);

        const result = await getUserProfileUsecase.execute(publicId);

        return NextResponse.json(
            {message: '조회 성공', userProfile: result},
            {status: 200}
        );
  } catch (error) {
    return NextResponse.json({ error: "유저 정보를 가져올 수 없습니다." }, { status: 500 });
  }
}
