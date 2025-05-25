import type { GroupBuyImageRepository } from "@/domain/repositories/group-buy/GroupBuyImageRepository";
import type { GroupBuyRepository } from "@/domain/repositories/group-buy/GroupBuyRepository";
import type { ImageStorageRepository } from "@/domain/repositories/ImageStorageRepository";
import type { NeighborhoodRepository } from "@/domain/repositories/NeighborhoodRepository";
import type { CreateGroupBuyDto } from "./dto/CreateGroupBuyDto";
import type { GroupBuyParticipantRepository } from "@/domain/repositories/group-buy/GroupBuyParticipantRepository";

export class CreateGroupBuyUsecase {
  constructor(
    private groupBuyRepo: GroupBuyRepository,
    private neighborhoodRepo: NeighborhoodRepository,
    private groupBuyImageRepo: GroupBuyImageRepository,
    private imageStorageRepo: ImageStorageRepository,
    private groupBuyParticipantRepo: GroupBuyParticipantRepository,
  ) {}

  async execute(groupBuy: CreateGroupBuyDto) {
    const neighborhood = await this.neighborhoodRepo.findByName(
      groupBuy.neighborhoodName,
    );

    const result = await this.groupBuyRepo.save({
      neighborhoodId: neighborhood?.id,
      organizerId: groupBuy.organizerId,
      title: groupBuy.title,
      lat: groupBuy.lat,
      lng: groupBuy.lng,
      locationNote: groupBuy.locationNote,
      description: groupBuy.description,
      capacity: groupBuy.capacity,
      desiredItem: groupBuy.desiredItem,
      meetingDate: groupBuy.meetingDate,
      status: 0,
    });

    const images = await Promise.all(
      groupBuy.images.map(async (image, idx) => {
        const imageUrl = await this.imageStorageRepo.uploadPostImage(
          result.id,
          idx,
          image,
          "group-buy",
        );

        return {
          groupBuyId: result.id,
          url: imageUrl,
          order: idx,
        };
      }),
    );

    await this.groupBuyImageRepo.save(images);

    await this.groupBuyParticipantRepo.save({
      userId: groupBuy.organizerId,
      groupBuyId: result.id,
    });
  }
}
