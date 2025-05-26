import type { GroupBuyRepository } from "@/domain/repositories/group-buy/GroupBuyRepository";
import type { UserRepository } from "@/domain/repositories/UserRepository";

import type { ShareRepository } from "@/domain/repositories/share/ShareRepository";
import type { GetUserHistoryCountDto } from "./dto/GetUserHistoryCountDto";
import { getShareStatusCondition } from "./utils/getStatusCondition";

export class GetUserHistoryCountUsecase {
  constructor(
    private userRepo: UserRepository,
    private shareRepo: ShareRepository,
    private groupbuyRepo: GroupBuyRepository,
  ) {}

  async execute(
    countsByType: GetUserHistoryCountDto,
  ): Promise<Record<string, number>> {
    const { publicId, type, tabType } = countsByType;
    const user = await this.userRepo.findByPublicId(publicId);

    if (tabType === "status") {
      const statuses = ["active", "completed", "expired"] as const;
      if (type === "share") {
        const [active, completed, expired] = await Promise.all(
          statuses.map((status) => {
            const where = {
              ownerId: user?.id,
              ...getShareStatusCondition(status),
            };

            return this.shareRepo.getCount(where)
          }));
        return { active, completed, expired };
      }
      if (type === "group-buy") {
        const [active, completed] = await Promise.all(
          statuses.map((status) =>{
            const where = {
              organizerId: user?.id,
              status: status === "active" ? 0 : 1,
            };

            return this.groupbuyRepo.getCount(where)
          }));
        return { active, completed };
      }
    };

    if (tabType === "participation") {
      const [share, groupbuy] = await Promise.all([
          this.shareRepo.getCount({recipientId: user?.id,}),
          this.groupbuyRepo.getCount({
            participants: {
              some : {
                userId: user?.id,
              }
            }}),
      ]);
      return { share, groupbuy };
    };

    throw new Error("Invalid type or tabType");
  }
}
