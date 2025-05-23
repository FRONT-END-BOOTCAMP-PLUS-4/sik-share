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

    shares?.forEach((share) => {
//           id: string;
//   thumbnailSrc: string;
//   thumbnailAlt?: string;
//   title: string;
//   badgeVariant?: BadgeVariantProps<typeof Badge>["variant"];
//   badgeLabel?: string;
//   timeLeft?: string;
//   location: string;

      share.images = share.images.map((image) => ({
        ...image,
        imageUrl: image.imageUrl,
      }));
    }
  }
}
