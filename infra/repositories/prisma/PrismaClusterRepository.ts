import { PrismaClient } from "@/prisma/generated";
import type { ClusterRepository } from "@/domain/repositories/ClusterRepository";
import { subHours } from "date-fns";

export class PrismaClusterRepository implements ClusterRepository {
  private prisma = new PrismaClient();

  async getNeighborhoodClusters(): Promise<
    { id: number; name: string; lat: number; lng: number; count: number }[]
  > {
    const now = new Date();
    const oneHourAgo = subHours(now, 23);

    const neighborhoods = await this.prisma.neighborhood.findMany({
      select: {
        id: true,
        name: true,
        lat: true,
        lng: true,
      },
    });

    const results = await Promise.all(
      neighborhoods.map(async (n) => {
        const shareCount = await this.prisma.share.count({
          where: {
            neighborhoodId: n.id,
            createdAt: { gte: oneHourAgo },
            status: { not: 2 },
          },
        });
        
        const groupBuyCount = await this.prisma.groupBuy.count({
          where: {
            neighborhoodId: n.id,
            createdAt: { gte: oneHourAgo },
            status: { not: 1 },
          },
        });

        return {
          id: n.id,
          name: n.name,
          lat: n.lat,
          lng: n.lng,
          count: shareCount + groupBuyCount,
        };
      })
    );

    return results;
  }
}
