import { NextResponse } from "next/server";
import { CreateShareUsecase } from "@/application/usecases/share/CreateShareUsecase";
import { CreateShareDto } from "@/application/usecases/share/dto/CreateShareDto";
import { PrismaNeighborhoodRepository } from "@/infra/repositories/prisma/PrismaNeighborhoodRepository";
import { PrismaShareImageRepository } from "@/infra/repositories/prisma/share/PrismaShareImageRepository";
import { PrismaShareRepository } from "@/infra/repositories/prisma/share/PrismaShareRepository";
import { SupabaseImageStorageRepository } from "@/infra/repositories/supabase/SupabaseImageRepository";

export async function POST(req: Request){
  try {
    const formData = await req.formData();

    const shareItemId = Number(formData.get("shareItemId"));
    const ownerId = formData.get("ownerId") as string;
    const title = formData.get("title") as string;
    const locationNote = formData.get("locationNote") as string;
    const locationAddress = formData.get("locationAddress") as string;
    const lat = Number.parseFloat(formData.get("lat") as string);
    const lng = Number.parseFloat(formData.get("lng") as string);
    const description = formData.get("description") as string;
    const images = formData.getAll("images") as File[];


    const createShareDto = new CreateShareDto(
      shareItemId,
      ownerId,
      title,
      lat,
      lng,
      locationAddress,
      locationNote,
      description,
      images
    );

    const neighborhoodRepo = new PrismaNeighborhoodRepository();
    const shareRepo = new PrismaShareRepository();
    const shareImageRepo = new PrismaShareImageRepository();
    const imageStorageRepo = new SupabaseImageStorageRepository();

    const createShareUsecase = new CreateShareUsecase(shareRepo, neighborhoodRepo, shareImageRepo, imageStorageRepo);

    await createShareUsecase.execute(createShareDto);

    return NextResponse.json(
      {message : '나눔 등록 성공'},
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
