import type { UserRepository } from "@/domain/repositories/UserRepository";
import { type User, PrismaClient } from "@/prisma/generated";


export class PrismaUserRepository implements UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async save(user: User): Promise<User> {
    return await this.prisma.user.create({
      data: user,
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findByPublicId(id: number): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { publicId: id },
    });
  }

  async update(user: Partial<User>): Promise<User> {
    return await this.prisma.user.update({
      where: { publicId: user.publicId },
      data: user,
    });
  }
}
