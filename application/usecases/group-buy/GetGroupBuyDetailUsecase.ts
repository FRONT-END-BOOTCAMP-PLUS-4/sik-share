import type { GroupBuyDetailRepository } from "@/domain/repositories/group-buy/GroupBuyDetailRepository";
import type { GetGroupBuyDetailDto } from "./dto/GetGroupBuyDetailDto";

export class GetGroupBuyDetailUsecase {
  constructor(private readonly groupBuyRepo: GroupBuyDetailRepository) {}

  async execute(groupBuyId: number): Promise<GetGroupBuyDetailDto | null> {
    return await this.groupBuyRepo.getDetail(groupBuyId);
  }
}
