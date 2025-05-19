import type { ShareRepository } from "@/domain/repositories/share/ShareRepository";
import type { CreateShareDto } from "./dto/CreateShareDto";
import type { NeighborhoodRepository } from "@/domain/repositories/NeighborhoodRepository";
import type { UserRepository } from "@/domain/repositories/UserRepository";

export class CreateShareUsecase {
  constructor(
    private shareRepo: ShareRepository,
    private neighborhoodRepo: NeighborhoodRepository,
    private userRepo: UserRepository,
  ) {}

  async execute(share: CreateShareDto) {
    const neighborhood = await this.neighborhoodRepo.findByName(
      share.locationAddress,
    );

    const user = await this.userRepo.findByPublicId(share.ownerPublicId);
    
    // 이미지 저장 로직

    return await this.shareRepo.save({
      neighborhoodId: neighborhood?.id,
      shareItemId : share.shareItemId,
      ownerId : user?.id,
      title : share.title,
      lat : share.lat,
      lng : share.lng,
      locationAddress: share.locationAddress,
      locationNote: share.locationNote,
      description: share.description,
      status: share.status,
    });
  }
}
