import type { UserRepository } from "@/domain/repositories/share-box/UserRepository";
import { PrismaClient, type User } from "@/prisma/generated";

interface UserShareBox {
  id: string;
  nickname: string;
  profileUrl: string | null;
  shareScore: number;
}

export class PrismaUserRepository implements UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findByPublicId(publicId: number): Promise<UserShareBox | null> {
    return await this.prisma.user.findUnique({
      where: {
        publicId,
      },
      select: {
        id: true,
        nickname: true,
        profileUrl: true,
        shareScore: true,
      },
    });
  }
}
