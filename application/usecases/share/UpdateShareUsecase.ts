import type { ShareImageRepository } from "@/domain/repositories/share/ShareImageRepository";
import type { NeighborhoodRepository } from "@/domain/repositories/NeighborhoodRepository";
import type { UpdateShareDto } from "./dto/UpdateShareDto";
import type { ShareRepository } from "@/domain/repositories/share/ShareRepository";
import type { ImageStorageRepository } from "@/domain/repositories/ImageStorageRepository";

export class UpdateShareUsecase {
  constructor(
    private neighborhoodRepo: NeighborhoodRepository,
    private shareRepo: ShareRepository,
    private shareImageRepo: ShareImageRepository,
    private imageStorageRepo: ImageStorageRepository,
  ) {}

  async execute(share: UpdateShareDto) {
    const neighborhood = await this.neighborhoodRepo.findByName(
      share.neighborhoodName,
    );

    const result = await this.shareRepo.update({
      id : share.shareId,
      neighborhoodId : neighborhood?.id,
      title : share.title,
      lat : share.lat,
      lng : share.lng,
      locationNote : share.locationNote,
      description : share.description,
    });

    const images = await Promise.all(
      share.images.map(async (image, idx) => {
        const imageUrl = await this.imageStorageRepo.uploadPostImage(
          share.shareId,
          idx,
          image,
          "share"
        );

        return {
          shareId: result.id,
          url: imageUrl,
          order: idx,
        };
      })
    );

    await this.shareImageRepo.replace(images);
  }
}
