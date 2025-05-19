import { CheckUserExistenceUsecase } from '@/application/usecases/auth/CheckUserExistenceUsecase';
import { PrismaNeighborhoodRepository } from '@/infra/repositories/prisma/PrismaNeighborhoodRepository';
import { PrismaUserRepository } from '@/infra/repositories/prisma/PrismaUserRepository';
import { NextResponse } from 'next/server';

export async function POST(req: Request){
  try{
    const body = await req.json();
    const userRepo = new PrismaUserRepository();
    const neighborhoodRepo = new PrismaNeighborhoodRepository();
    const checkUserExistenceUsecase = new CheckUserExistenceUsecase(userRepo, neighborhoodRepo);
    const result = await checkUserExistenceUsecase.execute(body.email);
    
    return NextResponse.json(
      result,
      {status : 200}
    )

    
  }
  catch(error){
    if(error instanceof Error){
      return NextResponse.json(
        {message : error.message || '회원 조회 실패'},
        {status:400}
      )
    }

    return NextResponse.json(
      {message: "다시 시도해주세요"},
      {status: 500}
    )
  }
}