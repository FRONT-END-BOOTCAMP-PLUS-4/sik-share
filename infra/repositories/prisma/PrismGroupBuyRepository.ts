import { PrismaClient } from "@/prisma/generated";
import type { GroupBuyRepository } from "@/domain/repositories/GroupBuyRepository";
import type { GroupBuy } from "@/prisma/generated";

export class PrismaGroupBuyRepository implements GroupBuyRepository {
  private prisma = new PrismaClient();

  async getList(
    offset: number,
    limit: number,
    neighborhoodId: number
  ): Promise<(Partial<GroupBuy> & {
    thumbnailUrl: string | null;
    currentUser: number;
    maxUser: number;
  })[]> {
    const groupBuyList = await this.prisma.groupBuy.findMany({
      where: { neighborhoodId },
      orderBy: { meetingDate: "desc" },
      skip: offset,
      take: limit,
      select: {
        id: true,
        title: true,
        neighborhoodId: true,
        locationNote: true,
        meetingDate: true,
        capacity: true,
        images: {
          where: { order: 0 },
          select: { url: true },
        },
      },
    });

    const result = await Promise.all(
      groupBuyList.map(async (groupbuy) => {
        const participantCount = await this.prisma.groupBuyParticipant.count({
          where: { groupBuyId: groupbuy.id },
        });

        return {
          ...groupbuy,
          thumbnailUrl: groupbuy.images[0]?.url ?? null,
          currentUser: participantCount,
          maxUser: groupbuy.capacity ?? 0,
        };
      })
    );

    return result;
  }
}
