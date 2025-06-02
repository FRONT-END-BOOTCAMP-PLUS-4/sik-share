import type { PrismaGroupBuyRepository } from "@/infra/repositories/prisma/group-buy/PrismaGroupBuyRepository";
import type { GetGroupBuyFormDetailDto } from "./dto/GetGroupBuyFormDetailDto";
import { HttpError } from '@/errors/HttpError';

export class GetGroupBuyFormDetailUsecase {
  constructor(private groupBuyRepo: PrismaGroupBuyRepository) {}

  async execute(
    groupBuyId: number,
    userId: string,
  ): Promise<GetGroupBuyFormDetailDto> {
    const data = await this.groupBuyRepo.getDetail(groupBuyId);
    
    if(!data){
      throw new HttpError(404, "존재하지 않는 장보기입니다.");
    }

    if(data.organizerId !== userId){
      throw new HttpError(403, "수정 권한이 없습니다.");
    }

    return{
      title: data.title ?? "",
      description: data.desc ?? "",
      capacity : data.capacity ?? 2,
      neighborhoodName: data.neighborhoodName ?? "",
      locationNote : data.locationNote ?? "",
      lat: data.lat ?? 0,
      lng: data.lng ?? 0,
      desiredItem: data.desiredItem ?? "",
      meetingDate: data.meetingDate ?? new Date(),
      images: data.imageUrls ?? [],
    }
  }
}
