import { differenceInHours, format } from "date-fns";
import type { GetUserHistoryDto } from "./dto/GetUserHistoryDto";
import type { ShareRepository } from "@/domain/repositories/share/ShareRepository";
import { getShareStatusCondition } from "./utils/getStatusCondition";
import type { GetUserSharesResultDto } from "./dto/GetUserSharesResultDto";
import type { UserRepository } from "@/domain/repositories/UserRepository";
import type { StatusType } from "@/types/types";

export class GetUserSharesUsecase {
  constructor(
    private userRepo: UserRepository,
    private shareRepo: ShareRepository,
  ) {}

  async execute(
    sharesByStatus: GetUserHistoryDto,
  ): Promise<GetUserSharesResultDto[] | null> {
    const { publicId, status, page, itemsPerPage } = sharesByStatus;
    const user = await this.userRepo.findByPublicId(publicId);

    const where = {
      ownerId: user?.id,
      ...getShareStatusCondition(status as StatusType),
    };

    const data = await this.shareRepo.findByUserIdAndStatus({
      where,
      offset: page * itemsPerPage,
      itemsPerPage,
    });

    if (!data || data.length === 0) {
      return [];
    }

    const shares = data.map((item) => {
      const timeLeft = Math.max(
        differenceInHours(
          new Date((item.createdAt?.getTime?.() ?? 0) + 24 * 60 * 60 * 1000),
          new Date(),
        ),
        0,
      );

      const share: GetUserSharesResultDto = {
        id: item.id,
        title: item.title,
        thumbnailSrc: item.thumbnailUrl ?? "",
        location: item.locationNote,
      };

      if (item.status === 1 && item.meetingDate) {
        share.meetingDate = format(new Date(item.meetingDate), "yyyy-MM-dd");
      } else if (item.status === 0 && item.meetingDate) {
        share.meetingDate = format(new Date(item.meetingDate), "yyyy-MM-dd");
        share.badgeVariant = "share";
        share.badgeLabel = "예약";
      } else if (item.status === 0 && !item.meetingDate && timeLeft > 0) {
        share.timeLeft = timeLeft;
      }

      return share;
    });

    return shares;
  }
}
