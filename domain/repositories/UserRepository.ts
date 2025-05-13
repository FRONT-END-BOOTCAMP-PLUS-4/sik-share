import type { User } from "@/domain/entities/User";

export interface UserRepository {
  save(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findByPublicId(id: number): Promise<User | null>;
  update(user: Partial<User>): Promise<User>;
}
