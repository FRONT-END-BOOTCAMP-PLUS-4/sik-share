import type { ShareRepository } from "@/domain/repositories/share/ShareRepository";
import { GetShareListDto } from "./dto/GetShareListDto";

export class GetShareListUsecase {
  constructor(private shareRepo: ShareRepository) {}

  async execute({
    page,
    itemsPerPage,
    neighborhoodId,
  }: {
    page: number;
    itemsPerPage: number;
    neighborhoodId: number;
  }): Promise<GetShareListDto[]> {
    const offset = page * itemsPerPage;
    const shares = await this.shareRepo.getList(offset, itemsPerPage, neighborhoodId);
    const now = new Date();

    return shares.map((share) => {
      const createdAt = share.createdAt ?? new Date(0);
      const expiration = new Date(createdAt.getTime() + 24 * 60 * 60 * 1000);
      const diffMs = expiration.getTime() - now.getTime();
      const timeLeftInHours = Math.max(Math.floor(diffMs / (1000 * 60 * 60)), 0);

      return new GetShareListDto(
        
        share.id ?? 0,
        share.neighborhoodId ?? 0,
        share.title ?? "제목 없음",
        share.locationNote ?? "위치 정보 없음",
        share.createdAt ?? new Date(0),
        timeLeftInHours,
        share.thumbnailUrl ?? null
      );
    });
  }
}
