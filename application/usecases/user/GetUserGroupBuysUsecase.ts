import { format } from "date-fns";
import type { GetUserHistoryDto } from "./dto/GetUserHistoryDto";
import type { GroupBuyRepository } from "@/domain/repositories/group-buy/GroupBuyRepository";
import { getGroupBuyStatusCondition } from "./utils/getStatusCondition";
import type { GetUserGroupBuysResultDto } from "./dto/GetUserGroupBuysResultDto";
import type { UserRepository } from "@/domain/repositories/UserRepository";
import type { StatusType } from "@/types/types";

export class GetUserGroupBuysUsecase {
  constructor(
    private userRepo: UserRepository,
    private groupbuyRepo: GroupBuyRepository,
  ) {}

  async execute(
    groupbuysByStatus: GetUserHistoryDto,
  ): Promise<GetUserGroupBuysResultDto[]> {
    const { publicId, status, page, itemsPerPage } = groupbuysByStatus;
    const user = await this.userRepo.findByPublicId(publicId);

    const where = {
      organizerId: user?.id,
      ...getGroupBuyStatusCondition(status as StatusType),
    };

    const data = await this.groupbuyRepo.findByOwnerAndStatus({
      where,
      offset: page * itemsPerPage,
      itemsPerPage,
    });

    if (!data || data.length === 0) {
      return [];
    }

    return data.map((groupbuy) => ({
      id: groupbuy.id,
      title: groupbuy.title,
      thumbnailSrc: groupbuy.thumbnailUrl,
      location: groupbuy.locationNote,
      meetingDate: format(groupbuy.meetingDate, "yyyy-MM-dd"),
      currentUsers: groupbuy.participants,
      maxUsers: groupbuy.capacity,
    }));
  }
}
