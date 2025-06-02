import { HttpError } from "@/errors/HttpError";
import type { PrismaShareRepository } from "@/infra/repositories/prisma/share/PrismaShareRepository";
import type { getShareFormDetailDto } from "./dto/GetShareFormDetailDto";

export class GetShareFormDetailUsecase {
  constructor(private shareRepo: PrismaShareRepository) {}

  async execute(
    shareId: number,
    userId: string,
  ): Promise<getShareFormDetailDto> {
    const data = await this.shareRepo.getDetail(shareId);

    if (!data) {
      throw new HttpError(404, "존재하지 않는 나눔입니다.");
    }

    if (data.organizerId !== userId) {
      throw new HttpError(403, "수정 권한이 없습니다.");
    }

    return {
      shareItem: data.desiredItemName ?? "",
      title: data.title ?? "",
      description: data.desc ?? "",
      neighborhoodName: data.neighborhoodName ?? "",
      locationNote: data.locationNote ?? "",
      lat: data.lat ?? 0,
      lng: data.lng ?? 0,
      images: data.imageUrls ?? [],
    };
  }
}
