import { format } from "date-fns";
import type { GetUserHistoryDto } from "./dto/GetUserHistoryDto";
import type { GroupBuyRepository } from "@/domain/repositories/group-buy/GroupBuyRepository";
import type { GetUserGroupBuysResultDto } from "./dto/GetUserGroupBuysResultDto";
import type { UserRepository } from "@/domain/repositories/UserRepository";
import type { GetUserSharesResultDto } from "./dto/GetUserSharesResultDto";
import type { ShareRepository } from "@/domain/repositories/share/ShareRepository";

export class GetUserParticipationsUsecase {
  constructor(
    private userRepo: UserRepository,
    private shareRepo: ShareRepository,
    private groupbuyRepo: GroupBuyRepository,
  ) {}

  async execute(
    groupbuysByStatus: GetUserHistoryDto,
  ): Promise<GetUserSharesResultDto[] | GetUserGroupBuysResultDto[]> {
    const { publicId, status, page, itemsPerPage } = groupbuysByStatus;
    const user = await this.userRepo.findByPublicId(publicId);

    let resultData: GetUserSharesResultDto[] | GetUserGroupBuysResultDto[] = [];

    if (status === "share") {
      const where = {
        recipientId: user?.id,
      };
  
      const data = await this.shareRepo.findByUserIdAndStatus({
        where,
        offset: page * itemsPerPage,
        itemsPerPage,
      });

      if (!data || data.length === 0) {
        return [];
      }

      resultData = data.map((share) => ({
        id: share.id,
        title: share.title,
        thumbnailSrc: share.thumbnailUrl ?? "",
        location: share.locationNote,
        meetingDate: share.meetingDate ? format(share.meetingDate, "yyyy-MM-dd") : "",
      }));
    } else {
      const where = {
        participants: {
          some : {
            userId: user?.id,
          }
        }
      };
  
      const data = await this.groupbuyRepo.findByOwnerAndStatus({
        where,
        offset: page * itemsPerPage,
        itemsPerPage,
      });

      if (!data || data.length === 0) {
        return [];
      }
      resultData = data.map((groupbuy) => ({
        id: groupbuy.id,
        title: groupbuy.title,
        thumbnailSrc: groupbuy.thumbnailUrl,
        location: groupbuy.locationNote,
        meetingDate: format(groupbuy.meetingDate, "yyyy-MM-dd"),
        currentUsers: groupbuy.participants,
        maxUsers: groupbuy.capacity,
      }));
    }

    return resultData;
  }
}
