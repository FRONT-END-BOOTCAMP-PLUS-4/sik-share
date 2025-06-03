import type { GroupBuyRepository } from "@/domain/repositories/group-buy/GroupBuyRepository";

export class GetGroupBuyCountUsecase {
  constructor(private groupBuyRepo: GroupBuyRepository) {}

  async execute(): Promise<number> {
    return this.groupBuyRepo.countAll();
  }
}
