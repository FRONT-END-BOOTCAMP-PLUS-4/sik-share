import { CreateShareUsecase } from './../../../application/usecases/share/CreateShareUsecase';
import { CreateShareDto } from '@/application/usecases/share/dto/CreateShareDto';
import { PrismaNeighborhoodRepository } from '@/infra/repositories/prisma/PrismaNeighborhoodRepository';
import { PrismaShareImageRepository } from '@/infra/repositories/prisma/share/PrismaShareImageRepository';
import { PrismaShareRepository } from '@/infra/repositories/prisma/share/PrismaShareRepository';
import { SupabaseImageStorageRepository } from '@/infra/repositories/supabase/SupabaseImageRepository';
import { NextResponse } from 'next/server';

export async function POST(req: Request){
  try{
    const body = await req.json();

    if(body.images.length === 0) {
      throw new Error('이미지를 등록해야 합니다.');
    }

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

    const neighborhoodRepo = new PrismaNeighborhoodRepository();
    const shareRepo = new PrismaShareRepository();
    const shareImageRepo = new PrismaShareImageRepository();
    const imageStorageRepo = new SupabaseImageStorageRepository();

    const createShareUsecase = new CreateShareUsecase(shareRepo, neighborhoodRepo, shareImageRepo, imageStorageRepo);

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