import type { UserRepository } from "@/domain/repositories/UserRepository";
import type { CreateUserDto } from "./dto/CreateUserDto";
import type { NeighborhoodRepository } from "@/domain/repositories/NeighborhoodRepository";
import { CreateUserResultDto } from "./dto/CreateUserResultDto";

export class CreateUserUsecase {
  constructor(
    private userRepo: UserRepository,
    private neighborhoodRepo: NeighborhoodRepository,
  ) {}

  async execute(user: CreateUserDto): Promise<CreateUserResultDto> {
    const neighborhood = await this.neighborhoodRepo.findByName(
      user.neighborhoodName,
    );

    const createdUser = await this.userRepo.save({
      email: user.email,
      nickname: user.nickname,
      profileUrl: user.profileUrl,
      address: user.address,
      neighborhoodId: neighborhood?.id,
    });

    return new CreateUserResultDto(
      createdUser.id,
      createdUser.nickname,
      createdUser.profileUrl,
      neighborhood?.name || user.email,
      createdUser.shareScore,
      createdUser.publicId
    )
  }
}
