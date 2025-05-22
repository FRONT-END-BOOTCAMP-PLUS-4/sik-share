import { GetShareItemUsecase } from '@/application/usecases/share/GetShareItemsUsecase';
import { PrismaShareItemRepository } from '@/infra/repositories/prisma/share/PrismaShareItemRepository';
import { NextResponse } from 'next/server';

export async function GET(req:Request){
  try{
    const shareItemRepo = new PrismaShareItemRepository();
    const getShareItemUsecase = new GetShareItemUsecase(shareItemRepo);

    const result = await getShareItemUsecase.execute();

    return NextResponse.json(
      {result}, 
      {status: 200}
    );
  }
  catch(error){
    if(error instanceof Error){
          return NextResponse.json(
            {message: error.message || '나눔 아이템 조회 실패'},
            {status : 400}
          )
    }
    
    return NextResponse.json(
      {message: '다시 시도해주세요'},
      {status : 500}
    )
  }
}