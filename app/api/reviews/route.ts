import { NextResponse } from 'next/server';
import { PrismaReviewShortReviewRepository } from '@/infra/repositories/prisma/review/PrismaReviewShortReviewRepository';
import { CreateReviewUsecase } from '@/application/usecases/review/CreateReviewUsecase';
import { CreateReviewDto } from '@/application/usecases/review/dto/CreateReviewDto';
import { PrismaReviewRepository } from '@/infra/repositories/prisma/review/PrismaReviewRepository';
import { PrismaUserRepository } from '@/infra/repositories/prisma/PrismaUserRepository';

export async function POST(req:Request){
  try{
    const data = await req.json();

    const {
      shareId,
      writerId,
      recipientId,
      grade,
      shortReviews,
      content,
    } = data;

    const createReviewDto = new CreateReviewDto(
      Number(shareId),
      writerId,
      recipientId,
      Number(grade),
      shortReviews.map(Number),
      content
    );

    const reviewRepo = new PrismaReviewRepository();
    const reviewShortReviewRepo = new PrismaReviewShortReviewRepository();
    const userRepo = new PrismaUserRepository();
    const createReviewUsecase = new CreateReviewUsecase(reviewRepo, reviewShortReviewRepo, userRepo);

    await createReviewUsecase.execute(createReviewDto);

    return NextResponse.json(
      { message : '후기 등록 성공' },
      { status : 201 }
    )
  }
  catch(error){
    if(error instanceof Error){
      return NextResponse.json(
        { message : error.message || '후기 등록 실패' },
        { status : 400 }
      )
    }

    return NextResponse.json(
      { message : '다시 시도해주세요' },
      { status : 500 }
    )
  }
}
