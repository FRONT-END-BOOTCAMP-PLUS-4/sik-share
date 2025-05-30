import type { GroupBuyImageRepository } from "@/domain/repositories/group-buy/GroupBuyImageRepository";
import type { GroupBuyRepository } from "@/domain/repositories/group-buy/GroupBuyRepository";
import type { ImageStorageRepository } from "@/domain/repositories/ImageStorageRepository";
import type { NeighborhoodRepository } from "@/domain/repositories/NeighborhoodRepository";
import type { UpdateGroupBuyDto } from "./dto/UpdateGroupBuyDto";

export class UpdateGroupBuyUsecase {
  constructor(
    private neighborhoodRepo: NeighborhoodRepository,
    private groupBuyRepo: GroupBuyRepository,
    private groupBuyImageRepo: GroupBuyImageRepository,
    private imageStorageRepo: ImageStorageRepository,
  ) {}

  async execute(groupBuy: UpdateGroupBuyDto) {
    const neighborhood = await this.neighborhoodRepo.findByName(
      groupBuy.neighborhoodName,
    );

    const result = await this.groupBuyRepo.update({
      id : groupBuy.groupBuyId,
      neighborhoodId : neighborhood?.id,
      title : groupBuy.title,
      lat : groupBuy.lat,
      lng : groupBuy.lng,
      locationNote : groupBuy.locationNote,
      description : groupBuy.description,
    });

    const images = await Promise.all(
      groupBuy.images.map(async (image, idx) => {
        const imageUrl = await this.imageStorageRepo.uploadPostImage(
          groupBuy.groupBuyId,
          idx,
          image,
          "group-buy"
        );

        return {
          groupBuyId: result.id,
          url: imageUrl,
          order: idx,
        };
      })
    );

    await this.groupBuyImageRepo.replace(images);
  }
}
