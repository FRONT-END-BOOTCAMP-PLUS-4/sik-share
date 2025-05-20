import type { UserRepository } from "@/domain/repositories/UserRepository";
import type { NeighborhoodRepository } from "@/domain/repositories/NeighborhoodRepository";
import type { GetUserProfileDto } from "./dto/GetUserProfileDto";

export class GetUserProfileUsecase {
    constructor(
      private userRepo: UserRepository,
      private neighborhoodRepo: NeighborhoodRepository,
    ) {}

    async execute(id: number): Promise<GetUserProfileDto> {
    const user = await this.userRepo.findByPublicId(id);

    if (!user) {
      throw new Error("User not found");
    }

    const neighborhood = await this.neighborhoodRepo.findById(
      user.neighborhoodId
    );

    return {
      nickName: user.nickname,
      profileUrl: user.profileUrl,
      score: user.shareScore,
      neighborhoodName: neighborhood?.name,
    };
  
  }

}