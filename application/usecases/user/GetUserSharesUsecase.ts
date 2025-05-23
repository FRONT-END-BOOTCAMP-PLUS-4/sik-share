import { differenceInHours } from "date-fns";
import type { GetUserSharesDto } from "./dto/GetUserSharesDto";
import type { ShareRepository } from "@/domain/repositories/ShareRepository";
import { getStatusCondition } from "./utils/getStatusCondition";
import type { GetUserSharesResultDto } from "./dto/GetUserSharesResultDto";

export class GetUserSharesUsecase {
  constructor(private shareRepo: ShareRepository) {}

  async execute(
    sharesByStatus: GetUserSharesDto,
  ): Promise<GetUserSharesResultDto[] | null> {
    const { ownerId, status, page, itemsPerPage } = sharesByStatus;

    const where = {
      ownerId,
      ...getStatusCondition(status, "share"),
    };

    console.log("where", where);

    const data = await this.shareRepo.findByOwnerAndStatus({
      where,
      offset: page * itemsPerPage,
      itemsPerPage,
    });

    console.log("data --- ", data);

    if (!data) {
      return null;
    }

    const shares = data?.map((item) => {
      const timeLeft = Math.max(
        differenceInHours(new Date(item.createdAt.getTime() + 24 * 60 * 60 * 1000), new Date()),
        0
      );

      return {
      id: item.id,
      title: item.title,
      // thumbnailSrc: item.thumbnailUrl,
      location: item.locationNote,
      ...(item.meetingDate && {
        meetingDate: item.meetingDate,
        badgeVariant: "share", 
        badgeLabel: "예약",
      }),
      ...(!item.meetingDate && {
        timeLeft: timeLeft,    
      }),
    }
    });

    return shares.length > 0 ? shares : null;
  }
}
