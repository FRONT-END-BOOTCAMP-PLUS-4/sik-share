import { differenceInHours } from "date-fns";
import type { GetUserSharesDto } from "./dto/GetUserSharesDto";
import type { ShareRepository } from "@/domain/repositories/ShareRepository";
import { getStatusCondition } from "./utils/getStatusCondition";
import type { GetUserSharesResultDto } from "./dto/GetUserSharesResultDto";
import type { UserRepository } from "@/domain/repositories/UserRepository";

export class GetUserSharesUsecase {
  constructor(
    private userRepo: UserRepository,
    private shareRepo: ShareRepository,
  ) {}

  async execute(
    sharesByStatus: GetUserSharesDto,
  ): Promise<GetUserSharesResultDto[] | null> {
    const { publicId, status, page, itemsPerPage } = sharesByStatus;
    const user = await this.userRepo.findByPublicId(publicId);

    const where = {
      ownerId : user?.id,
      ...getStatusCondition(status, "share"),
    };

    console.log("where", where);

    const data = await this.shareRepo.findByOwnerAndStatus({
      where,
      offset: page * itemsPerPage,
      itemsPerPage,
    });

    console.log("data --- ", data);

    if (!data || data.length === 0) {
      return null;
    }

    const shares = data.map((item) => {
      const timeLeft = Math.max(
        differenceInHours(
          new Date((item.createdAt?.getTime?.() ?? 0) + 24 * 60 * 60 * 1000),
          new Date(),
        ),
        0,
      );

      return {
        id: item.id!,
        title: item.title!,
        thumbnailSrc: item.thumbnailUrl ?? "",
        location: item.locationNote!,
        ...(item.status === 1 &&
          item.meetingDate && {
            meetingDate: item.meetingDate,
          }),
        ...(item.status === 0 &&
          item.meetingDate && {
            meetingDate: item.meetingDate,
            badgeVariant: "share",
            badgeLabel: "예약",
          }),
        ...(item.status === 0 && !item.meetingDate && timeLeft > 0 && {
          timeLeft: timeLeft,
        }),
      };
    });

    return shares.length > 0 ? shares : null;
  }
}
