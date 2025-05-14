import type { User } from "@/prisma/generated";

export interface UserRepository {
  save(user: Partial<User>): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findByPublicId(id: number): Promise<User | null>;
  update(user: Partial<User>): Promise<User>;
}
