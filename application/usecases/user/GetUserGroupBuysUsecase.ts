import { format } from "date-fns";
import type { GetUserHistoryDto } from "./dto/GetUserHistoryDto";
import type { GroupBuyRepository } from "@/domain/repositories/group-buy/GroupBuyRepository";
import type { GetUserGroupBuysResultDto } from "./dto/GetUserGroupBuysResultDto";
import type { UserRepository } from "@/domain/repositories/UserRepository";

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
      status: status === "active" ? 0 : 1,
      deletedAt : null,
    };

    const data = await this.groupbuyRepo.getUserGroupbuys({
      where,
      offset: page * itemsPerPage,
      itemsPerPage,
    });

    if (!data || data.length === 0) {
      return [];
    }

    const now = new Date();

    return data.map((groupbuy) => ({
      id: groupbuy.id,
      title: groupbuy.title,
      thumbnailSrc: groupbuy.thumbnailUrl,
      location: groupbuy.locationNote,
      meetingDate: format(groupbuy.meetingDate, "yyyy-MM-dd"),
      currentUsers: groupbuy.participants,
      maxUsers: groupbuy.capacity,
      ...(groupbuy.status === 0 && groupbuy.participants <= 1 && groupbuy.meetingDate && new Date(groupbuy.meetingDate) < now && { badgeLabel : "마감" })
    }));
  }
}
