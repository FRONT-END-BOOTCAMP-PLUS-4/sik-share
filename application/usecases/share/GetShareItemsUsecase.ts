import type { ShareItemRepository } from "@/domain/repositories/share/ShareItemRepository";
import type { ShareRepository } from "@/domain/repositories/share/ShareRepository";

export class GetShareItemUsecase {
  constructor(
    private shareItemRepo: ShareItemRepository,
    private ShareRepo: ShareRepository,
  ) {}

  async execute(userId: string) {
    const recentShares = await this.ShareRepo.findRecentShares(userId, 24);
    const recentShareItmeIds = recentShares.map(share => share.shareItemId);

    return await this.shareItemRepo.findAvailableItems(recentShareItmeIds);
  }
}
