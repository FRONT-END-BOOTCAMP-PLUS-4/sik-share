import type { UserRepository } from "@/domain/repositories/UserRepository";
import type { NeighborhoodRepository } from "@/domain/repositories/NeighborhoodRepository";
import type { UpdateUserAddressDto } from "./dto/UpdateUserAddressDto";

export class UpdateUserAddressUsecase {
  constructor(
    private userRepo: UserRepository,
    private neighborhoodRepo: NeighborhoodRepository,
  ) {}

  async execute(user: UpdateUserAddressDto): Promise<void> {
    const neighborhood = await this.neighborhoodRepo.findByName(
      user.neighborhoodName,
    );

    await this.userRepo.update({
      publicId: Number(user.userPublicId),
      address: user.address,
      neighborhoodId: neighborhood?.id,
    });
  }
}
