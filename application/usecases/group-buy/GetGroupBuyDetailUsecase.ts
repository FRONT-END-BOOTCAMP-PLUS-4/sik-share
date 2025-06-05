import type { GroupBuyRepository } from "@/domain/repositories/group-buy/GroupBuyRepository";
import type { GetGroupBuyDetailDto } from "./dto/GetGroupBuyDetailDto";

export class GetGroupBuyDetailUsecase {
  constructor(private readonly groupBuyRepo: GroupBuyRepository) {}

  async execute(groupBuyId: number): Promise<GetGroupBuyDetailDto | null> {
    const detail = await this.groupBuyRepo.getDetail(groupBuyId);
    
    if (
      detail &&
      typeof detail.id === "number" &&
      typeof detail.title === "string" &&
      typeof detail.desc === "string"
    ) {
      return detail as GetGroupBuyDetailDto;
    }
    return null;
  }
}
