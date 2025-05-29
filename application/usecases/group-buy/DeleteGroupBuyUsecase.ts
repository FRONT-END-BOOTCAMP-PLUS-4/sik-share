import type { GroupBuyRepository } from "@/domain/repositories/group-buy/GroupBuyRepository";

export class DeleteGroupBuyUsecase {
  constructor(private groupBuyRepo: GroupBuyRepository) {}

  async execute(groupBuyId: number) {
    await this.groupBuyRepo.softDelete(groupBuyId);
  }
}
