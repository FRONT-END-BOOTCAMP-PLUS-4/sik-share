import type { UserRepository } from "@/domain/repositories/UserRepository";
import type { CreateUserDto } from "./dto/CreateUserDto";
import type { User } from "@/domain/entities/User";

export class CreateUserUsecase {
  constructor(private repository: UserRepository) {}

  async execute(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.repository.findByEmail(createUserDto.email);

    if (user) return user;

    return await this.repository.save({
      email: createUserDto.email,
      nickname: createUserDto.nickname,
      profileUrl: createUserDto.profileUrl,
    });
  }
}
