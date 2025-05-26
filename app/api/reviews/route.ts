import { NextResponse } from 'next/server';
import { PrismaReviewShortReviewRepository } from '@/infra/repositories/prisma/review/PrismaReviewShortReviewRepository';
import { CreateReviewUsecase } from '@/application/usecases/review/CreateReviewUsecase';
import { CreateReviewDto } from '@/application/usecases/review/dto/CreateReviewDto';
import { PrismaReviewRepository } from '@/infra/repositories/prisma/review/PrismaReviewRepository';
import { PrismaShareRepository } from '@/infra/repositories/prisma/share/PrismaShareRepository';

export async function POST(req:Request){
  try{
    const formData = await req.formData();

    const shareId = Number(formData.get("shareId"));
    const writerId = formData.get("writerId") as string;
    const grade = Number(formData.get("grade"));
    const shortReviews = (formData.getAll("shortReviews") as string[]).map(Number);
    const content = formData.get("content") as string;

    const createReviewDto = new CreateReviewDto(
      shareId,
      writerId,
      grade,
      shortReviews,
      content
    );

    const shareRepo = new PrismaShareRepository();
    const reviewRepo = new PrismaReviewRepository();
    const reviewShortReviewRepo = new PrismaReviewShortReviewRepository();
    const createReviewUsecase = new CreateReviewUsecase(shareRepo, reviewRepo, reviewShortReviewRepo);

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