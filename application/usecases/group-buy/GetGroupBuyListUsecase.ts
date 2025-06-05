import type { GroupBuyRepository } from "@/domain/repositories/group-buy/GroupBuyRepository";
import { GetGroupBuyListDto } from "./dto/GetGroupBuyListDto";

export class GetGroupBuyListUsecase {
  constructor(private groupBuyRepo: GroupBuyRepository) {}

  async execute({
    page,
    itemsPerPage,
    neighborhoodId,
  }: {
    page: number;
    itemsPerPage: number;
    neighborhoodId: number;
  }): Promise<GetGroupBuyListDto[]> {
    const offset = page * itemsPerPage;
    const groupBuy = await this.groupBuyRepo.getList(
      offset,
      itemsPerPage,
      neighborhoodId,
    );

    return groupBuy.map((groupbuy) => {
      return new GetGroupBuyListDto(
        groupbuy.id ?? 0,
        groupbuy.neighborhoodId ?? 0,
        groupbuy.title ?? "제목 없음",
        groupbuy.locationNote ?? "위치 정보 없음",
        groupbuy.meetingDate ?? new Date(0),
        groupbuy.thumbnailUrl ?? null,
        groupbuy.currentUser ?? 0,
        groupbuy.maxUser ?? 0,
      );
    });
  }
}
