import type { GetGroupBuyDetailDto } from "@/application/usecases/group-buy/dto/GetGroupBuyDetailDto";

export interface GroupBuyDetailRepository {
  getDetail(groupBuyId: number): Promise<GetGroupBuyDetailDto | null>;
}
