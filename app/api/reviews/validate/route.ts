import { ValidateReviewWritableUsecase } from '@/application/usecases/review/ValidateReviewWritableUsecase';
import { PrismaShareRepository } from '@/infra/repositories/prisma/share/PrismaShareRepository';
import { PrismaUserRepository } from '@/infra/repositories/prisma/PrismaUserRepository';
import { PrismaReviewRepository } from '@/infra/repositories/prisma/review/PrismaReviewRepository';
import { NextResponse } from 'next/server';

export async function GET(req: Request){
  try{
    const {searchParams} = new URL(req.url);

    const shareId = Number(searchParams.get('shareId'));
    const writerId = searchParams.get('writerId');

    if(!shareId || !writerId){
      return NextResponse.json({
        message : '쿼리 파라미터가 잘못되었습니다.'
      }, {
        status: 400
      })
    }

    const shareRepo = new PrismaShareRepository();
    const reviewRepo = new PrismaReviewRepository();
    const userRepo = new PrismaUserRepository();

    const validateReviewWritableUsecase = new ValidateReviewWritableUsecase(shareRepo, reviewRepo, userRepo);
    
    const result = await validateReviewWritableUsecase.execute(shareId, writerId);

    return NextResponse.json(result, {status : 200});
  }
  catch(error){
    if(error instanceof Error){
      return NextResponse.json(
        { message : error.message || '다시 시도해주세요' },
        { status : 400 }
      )
    }

    return NextResponse.json(
      { message : '다시 시도해주세요' },
      { status : 500 }
    )
  }
}