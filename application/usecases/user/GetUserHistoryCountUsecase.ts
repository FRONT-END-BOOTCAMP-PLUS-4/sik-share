import type { GroupBuyRepository } from "@/domain/repositories/group-buy/GroupBuyRepository";
import type { UserRepository } from "@/domain/repositories/UserRepository";

import type { ShareRepository } from "@/domain/repositories/share/ShareRepository";
import type { GetUserHistoryCountDto } from "./dto/GetUserHistoryCountDto";
import { getShareStatusCondition } from "./utils/getStatusCondition";
import type { ReviewRepository } from "@/domain/repositories/review/ReviewRepository";

export class GetUserHistoryCountUsecase {
  constructor(
    private userRepo: UserRepository,
    private shareRepo: ShareRepository,
    private groupbuyRepo: GroupBuyRepository,
    private reviewRepo: ReviewRepository,
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
              deletedAt : null,
            };

            return this.shareRepo.getCount(where);
          }),
        );
        return { active, completed, expired };
      }
      if (type === "group-buy") {
        const [active, completed] = await Promise.all(
          statuses.map((status) => {
            const where = {
              organizerId: user?.id,
              status: status === "active" ? 0 : 1,
              deletedAt : null,
            };

            return this.groupbuyRepo.getCount(where);
          }),
        );
        return { active, completed };
      }
    }

    if (tabType === "participation") {
      const [share, groupbuy] = await Promise.all([
        this.shareRepo.getCount({ recipientId: user?.id, deletedAt : null, }),
        this.groupbuyRepo.getCount({
          deletedAt : null,
          AND: [
            { organizerId: { not: user?.id } },
            { participants: { some: { userId: user?.id } } }
          ]
        }),
      ]);
      return { share, groupbuy };
    }

    if (tabType === "review") {
      const review = await this.reviewRepo.getCount({ recipientId: user?.id, content: { not: "",}, });
      return { review };
    }

    throw new Error("Invalid type or tabType");
  }
}
