import { CreateUserUsecase } from './../../../../application/usecases/auth/CreateUserUsecase';
import { CreateUserDto } from '@/application/usecases/auth/dto/CreateUserDto';
import { PrismaNeighborhoodRepository } from '@/infra/repositories/prisma/PrismaNeighborhoodRepository';
import { PrismaUserRepository } from '@/infra/repositories/prisma/PrismaUserRepository';
import { NextResponse } from 'next/server';

export async function POST(req: Request){
  try{
    const body = await req.json();

    const createUserDto = new CreateUserDto(
      body.email,
      body.nickname,
      body.address,
      body.neighborhoodName,
      body.profileUrl,
    );

    const userRepo = new PrismaUserRepository();
    const neighborRepo = new PrismaNeighborhoodRepository();
    const createUserUsecase = new CreateUserUsecase(userRepo, neighborRepo);

    const result = await createUserUsecase.execute(createUserDto);

    return NextResponse.json(
      {message : '가입 성공', user: result},
      {status : 201}
    )
  }
  catch(error){
    if(error instanceof Error){
      return NextResponse.json(
        {message : error.message || '회원 가입 실패'},
        {status:400}
      )
    }

    return NextResponse.json(
      {message: "다시 시도해주세요"},
      {status: 500}
    )
  }
}