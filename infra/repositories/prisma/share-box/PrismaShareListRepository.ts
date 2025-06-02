import type { ShareListRepository, ShareWithRelations } from "@/domain/repositories/share-box/ShareListRepository";
import { PrismaClient } from "@/prisma/generated";

export class PrismaShareListRepository implements ShareListRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findById(userId: string): Promise<ShareWithRelations[]> {
    return await this.prisma.share.findMany({
      where: {
        ownerId: userId,
        status: { not: 2 },
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
