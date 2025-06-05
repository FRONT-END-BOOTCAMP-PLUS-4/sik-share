import type { ShareListRepository, ShareWithRelations } from "@/domain/repositories/share-box/ShareListRepository";
import { PrismaClient } from "@/prisma/generated";

export class PrismaShareListRepository implements ShareListRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findById(userId: string): Promise<ShareWithRelations[]> {
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    return await this.prisma.share.findMany({
      where: {
        ownerId: userId,
        status: { not: 2 },
        deletedAt: null,
        createdAt: {
          gte: twentyFourHoursAgo,
        },
      },
      include: {
        images: true,
        shareItem: true,
        owner: true,
        neighborhood: true,
      },
    });
  }
}
