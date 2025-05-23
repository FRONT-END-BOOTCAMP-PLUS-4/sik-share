import { PrismaClient } from "@/prisma/generated";
import type { ShareRepository } from "@/domain/repositories/ShareRepository";
import type { Share } from "@/prisma/generated";

export class PrismaShareRepository implements ShareRepository {
  private prisma = new PrismaClient();

  async getList(
    offset: number,
    limit: number,
    neighborhoodId: number
  ): Promise<(Partial<Share> & { thumbnailUrl: string | null })[]> {
    const shares = await this.prisma.share.findMany({
      where: { neighborhoodId },
      orderBy: { createdAt: "desc" },
      skip: offset,
      take: limit,
      select: {
        id: true,
        title: true,
        neighborhoodId: true,
        locationNote: true,
        createdAt: true,
        images: {
          where: { order: 0 },
          select: { url: true },
        },
      },
    });

    return shares.map((share) => ({
      ...share,
      thumbnailUrl: share.images[0]?.url ?? null,
    }));
  }
}
