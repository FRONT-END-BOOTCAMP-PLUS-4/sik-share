import { HttpError } from "@/errors/HttpError";
import type { getShareFormDetailDto } from "./dto/GetShareFormDetailDto";
import type { ShareRepository } from "@/domain/repositories/share/ShareRepository";

export class GetShareFormDetailUsecase {
  constructor(private shareRepo: ShareRepository) {}

  async execute(
    shareId: number,
    userId: string,
  ): Promise<getShareFormDetailDto> {
    const data = await this.shareRepo.getFormDetail(shareId);

    if (!data || data.deletedAt) {
      throw new HttpError(404, "존재하지 않는 나눔입니다.");
    }

    if (data.ownerId !== userId) {
      throw new HttpError(403, "수정 권한이 없습니다.");
    }

    return {
      shareItem: data.shareItem.name ?? "",
      title: data.title ?? "",
      description: data.description ?? "",
      neighborhoodName: data.neighborhood.name ?? "",
      locationNote: data.locationNote ?? "",
      lat: data.lat ?? 0,
      lng: data.lng ?? 0,
      images: data.images.map(img => img.url) ?? [],
    };
  }
}
