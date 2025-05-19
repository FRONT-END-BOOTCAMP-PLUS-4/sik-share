import { CreateShareUsecase } from './../../../application/usecases/share/CreateShareUsecase';
import { CreateShareDto } from '@/application/usecases/share/dto/CreateShareDto';
import { PrismaNeighborhoodRepository } from '@/infra/repositories/prisma/PrismaNeighborhoodRepository';
import { PrismaUserRepository } from '@/infra/repositories/prisma/PrismaUserRepository';
import { PrismaShareRepository } from '@/infra/repositories/prisma/share/PrismaShareRepository';
import { NextResponse } from 'next/server';

export async function POST(req: Request){
  try{
    const body = await req.json();
    const createShareDto = new CreateShareDto(
      body.shareItemId,
      body.ownerPublicId,
      body.title,
      body.lat,
      body.lng,
      body.locationAddress,
      body.locationNote,
      body.description,
      body.status,
      body.images
    );

    const userRepo = new PrismaUserRepository();
    const neighborhoodRepo = new PrismaNeighborhoodRepository();
    const shareRepo = new PrismaShareRepository();

    const createShareUsecase = new CreateShareUsecase(shareRepo, neighborhoodRepo, userRepo);

    const result = await createShareUsecase.execute(createShareDto);

    return NextResponse.json(
      {message : '나눔 등록 성공', share : result},
      {status : 201}
    )
  }
  catch(error){
    if(error instanceof Error){
      return NextResponse.json(
        {message: error.message || '나눔 등록 실패'},
        {status : 400}
      )
    }

    return NextResponse.json(
      {message: '다시 시도해주세요'},
      {status : 500}
    )
  }
}