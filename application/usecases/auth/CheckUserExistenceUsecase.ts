import type { UserRepository } from "@/domain/repositories/UserRepository";
import { CheckUserExistenceResultDto } from "./dto/CheckUserExistenceResultDto";
import type { NeighborhoodRepository } from "@/domain/repositories/NeighborhoodRepository";

export class CheckUserExistenceUsecase {
  constructor(
    private userRepo: UserRepository,
    private neighborhoodRepo: NeighborhoodRepository,
  ) {}

  async execute(email: string): Promise<CheckUserExistenceResultDto> {
    const user = await this.userRepo.findByEmail(email);

    const exists = !!user;

    
    const neighborhood = exists ? await this.neighborhoodRepo.findById(user.neighborhoodId) : null;
    

    return new CheckUserExistenceResultDto(
      exists,
      user?.id || null,
      user?.nickname || null,
      user?.profileUrl || null,
      neighborhood?.name || null,
      user?.shareScore ?? null,
      user?.publicId ?? null
    );
  }
}
