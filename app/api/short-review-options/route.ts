import { GetShortReviewOptionUsecase } from '@/application/usecases/review/GetShortReviewOptionUsecase';
import { PrismaShortReviewOptionRepository } from '@/infra/repositories/prisma/review/PrismaShortReviewOptionRepository';
import { NextResponse } from 'next/server';

export async function GET(){
  try{
    const shortReviewOptionRepo = new PrismaShortReviewOptionRepository();
    const getShortReviewOptionUsecase = new GetShortReviewOptionUsecase(shortReviewOptionRepo);

    const result = await getShortReviewOptionUsecase.execute();

    return NextResponse.json(
      { result },
      { status : 200 }
    )
  }
  catch(error){
    if(error instanceof Error){
      return NextResponse.json(
        { message : error.message || '한줄평 보기 조회 실패' },
        {status : 400 }
      );
    }

    return NextResponse.json(
      { message : '다시 시도해주세요' },
      { status : 500 }
    )
  }
}