import type { ShareRepository } from "@/domain/repositories/ShareRepository";
import { type Share, PrismaClient } from "@/prisma/generated";

export class PrismaShareRepository implements ShareRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getList(offset: number, limit: number, neighborhoodId: number): Promise<Share[]> {
    return await this.prisma.share.findMany({
      where: { neighborhoodId },
      orderBy: { createdAt: "desc" },
      skip: offset,
      take: limit,
      include: {
        images: true,
        shareItem: true,
        owner: {
          select: { nickname: true, profileUrl: true },
        },
      },
    });
  }
}
