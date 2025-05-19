import type { UserRepository } from "@/domain/repositories/UserRepository";
import type { CreateUserDto } from "./dto/CreateUserDto";
import type { NeighborhoodRepository } from "@/domain/repositories/NeighborhoodRepository";
import type { User } from "@/prisma/generated";

export class CreateUserUsecase {
  constructor(
    private userRepo: UserRepository,
    private neighborhoodRepo: NeighborhoodRepository,
  ) {}

  async execute(user: CreateUserDto): Promise<User> {
    const neighborhood = await this.neighborhoodRepo.findByName(
      user.neighborhoodName,
    );
    return await this.userRepo.save({
      email: user.email,
      nickname: user.nickname,
      profileUrl: user.profileUrl,
      address: user.address,
      neighborhoodId: neighborhood?.id,
    });
  }
}
