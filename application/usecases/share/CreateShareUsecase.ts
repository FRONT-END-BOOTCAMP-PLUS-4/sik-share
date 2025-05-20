import type { ShareRepository } from "@/domain/repositories/share/ShareRepository";
import type { CreateShareDto } from "./dto/CreateShareDto";
import type { NeighborhoodRepository } from "@/domain/repositories/NeighborhoodRepository";
import type { ImageStorageRepository } from "@/domain/repositories/ImageStorageRepository";
import type { ShareImageRepository } from "@/domain/repositories/share/ShareImageRepository";

export class CreateShareUsecase {
  constructor(
    private shareRepo: ShareRepository,
    private neighborhoodRepo: NeighborhoodRepository,
    private shareImageRepo: ShareImageRepository,
    private imageStorageRepo: ImageStorageRepository,
  ) {}

  async execute(share: CreateShareDto) {
    const neighborhood = await this.neighborhoodRepo.findByName(
      share.locationAddress,
    );

    const result = await this.shareRepo.save({
      neighborhoodId: neighborhood?.id,
      shareItemId: share.shareItemId,
      ownerId: share.ownerId,
      title: share.title,
      lat: share.lat,
      lng: share.lng,
      locationAddress: share.locationAddress,
      locationNote: share.locationNote,
      description: share.description,
      status: share.status,
    });

    const images = await Promise.all(
      share.images.map(async (image, idx) => {
        const imageUrl = await this.imageStorageRepo.uploadeShareImage(
          result.id,
          idx,
          image,
        );

        return {
          shareId: result.id,
          url: imageUrl,
          order: idx,
        };
      })
    )

    await this.shareImageRepo.save(images);
  }
}
