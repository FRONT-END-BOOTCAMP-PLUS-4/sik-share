import type { Share } from "@/prisma/generated";
import type { GetUserSharesDto } from "./dto/GetUserSharesDto";
import type { ShareRepository } from "@/domain/repositories/ShareRepository";
import { getStatusCondition } from "./utils/getStatusCondition";

export class GetUserSharesUsecase {
  constructor(
    private shareRepo: ShareRepository,
  ) {}

  async execute(sharesByStatus: GetUserSharesDto): Promise<Share[] | null> {
    const { ownerId, status, page, itemsPerPage } = sharesByStatus;

    const where = {
        ownerId,
        ...getStatusCondition(status, "share"),
    };

    const shares = await this.shareRepo.findByOwnerAndStatus({
      where,
      offset: page * itemsPerPage,
      itemsPerPage,
    });

    return shares;
  }
}
