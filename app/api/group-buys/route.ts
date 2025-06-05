import { NextResponse } from 'next/server'
import { CreateGroupBuyUsecase } from '@/application/usecases/group-buy/CreateGroupBuyUsecase';
import { CreateGroupBuyDto } from '@/application/usecases/group-buy/dto/CreateGroupBuyDto';
import { PrismaGroupBuyImageRepository } from '@/infra/repositories/prisma/group-buy/PrismaGroupBuyImageRepository';
import { PrismaGroupBuyRepository } from '@/infra/repositories/prisma/group-buy/PrismaGroupBuyRepository';
import { PrismaNeighborhoodRepository } from '@/infra/repositories/prisma/PrismaNeighborhoodRepository';
import { SupabaseImageStorageRepository } from '@/infra/repositories/supabase/SupabaseImageRepository';
import { PrismaGroupBuyParticipantRepository } from '@/infra/repositories/prisma/group-buy/PrismaGroupBuyParticipantRepository';
import { PrismaGroupBuyChatRepository } from '@/infra/repositories/prisma/chat/PrismaGroupBuyChatRepository';
import { PrismaGroupBuyChatParticipantRepository } from '@/infra/repositories/prisma/chat/PrismaGroupBuyChatParticipantRepository';

export async function POST(req: Request){
  try{
    const formData = await req.formData();

    const organizerId = formData.get("organizerId") as string;
    const title = formData.get("title") as string;
    const lat = Number.parseFloat(formData.get("lat") as string);
    const lng = Number.parseFloat(formData.get("lng") as string);
    const neighborhoodName = formData.get("neighborhoodName") as string;
    const locationNote = formData.get("locationNote") as string;
    const description = formData.get("description") as string;
    const capacity = Number(formData.get("capacity"));
    const desiredItem = formData.get("desiredItem") as string;
    const meetingDate = new Date(formData.get("meetingDate") as string);
    const images = formData.getAll("images") as File[];

    const createGroupBuyDto = new CreateGroupBuyDto(
      organizerId,
      title,
      lat,
      lng,
      neighborhoodName,
      locationNote,
      description,
      capacity,
      desiredItem,
      meetingDate,
      images
    );

    const groupBuyRepo = new PrismaGroupBuyRepository();
    const neighborhoodRepo = new PrismaNeighborhoodRepository();
    const groupBuyImageRepo = new PrismaGroupBuyImageRepository();
    const imageStorageRepo = new SupabaseImageStorageRepository();
    const groupBuyParticipantRepo = new PrismaGroupBuyParticipantRepository();
    const groupBuyChatRepo = new PrismaGroupBuyChatRepository();
    const groupBuyChatParticipantRepo = new PrismaGroupBuyChatParticipantRepository();

    const createGroupBuyUsecase = new CreateGroupBuyUsecase(
      groupBuyRepo,
      neighborhoodRepo,
      groupBuyImageRepo,
      imageStorageRepo,
      groupBuyParticipantRepo,
      groupBuyChatRepo,
      groupBuyChatParticipantRepo
    );

    await createGroupBuyUsecase.execute(createGroupBuyDto);

    return NextResponse.json(
      {message : '같이 장보기 등록 성공'},
      {status : 201}
    )
  }
  catch(error){
    if(error instanceof Error){
      return NextResponse.json(
          {message: error.message || '같이 장보기 등록 실패'},
          {status : 400}
      )
    }
    
    return NextResponse.json(
      {message: '다시 시도해주세요'},
      {status : 500}
    )
  }
}
