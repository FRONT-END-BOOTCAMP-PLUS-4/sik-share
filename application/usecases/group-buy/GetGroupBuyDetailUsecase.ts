import type { GroupBuyRepository } from "@/domain/repositories/group-buy/GroupBuyRepository";
import type { GetGroupBuyDetailDto } from "./dto/GetGroupBuyDetailDto";

export class GetGroupBuyDetailUsecase {
  constructor(private readonly groupBuyRepo: GroupBuyRepository) {}

  async execute(groupBuyId: number): Promise<GetGroupBuyDetailDto | null> {
    return await this.groupBuyRepo.getDetail(groupBuyId);
  }
}
