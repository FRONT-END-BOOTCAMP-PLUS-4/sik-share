import { HttpError } from "@/errors/HttpError";
import type { GetGroupBuyFormDetailDto } from "./dto/GetGroupBuyFormDetailDto";
import type { GroupBuyRepository } from "@/domain/repositories/group-buy/GroupBuyRepository";


export class GetGroupBuyFormDetailUsecase {
  constructor(private groupBuyRepo: GroupBuyRepository) {}

  async execute(
    groupBuyId: number,
    userId: string,
  ): Promise<GetGroupBuyFormDetailDto> {
    const data = await this.groupBuyRepo.getFormDetail(groupBuyId);

    if (!data || data.deletedAt) {
      throw new HttpError(404, "존재하지 않는 장보기입니다.");
    }

    if (data.organizerId !== userId) {
      throw new HttpError(403, "수정 권한이 없습니다.");
    }

    return {
      title: data.title ?? "",
      description: data.description ?? "",
      capacity: data.capacity ?? 2,
      neighborhoodName: data.neighborhood.name ?? "",
      locationNote: data.locationNote ?? "",
      lat: data.lat ?? 0,
      lng: data.lng ?? 0,
      desiredItem: data.desiredItem ?? "",
      meetingDate: data.meetingDate ?? new Date(),
      images: data.images.map(img => img.url) ?? [],
    };
  }
}
