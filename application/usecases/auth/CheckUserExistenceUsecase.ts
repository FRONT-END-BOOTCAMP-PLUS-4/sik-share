import type { UserRepository } from "@/domain/repositories/UserRepository";
import { CheckUserExistenceResultDto } from "./dto/CheckUserExistenceResultDto";

export class CheckUserExistenceUsecase {
  constructor(private userRepo: UserRepository) {}

  async execute(email: string): Promise<CheckUserExistenceResultDto> {
    const user = await this.userRepo.findByEmail(email);

    const exists = !!user;

    return new CheckUserExistenceResultDto(exists, user?.publicId || null);
  }
}
