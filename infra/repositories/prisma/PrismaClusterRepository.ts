import { PrismaClient } from "@/prisma/generated";
import type { ClusterRepository } from "@/domain/repositories/ClusterRepository";

export class PrismaClusterRepository implements ClusterRepository {
  private prisma = new PrismaClient();

  async getNeighborhoodClusters(): Promise<
    { id: number; name: string; lat: number; lng: number; count: number }[]
  > {
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
        const [shareCount, groupBuyCount] = await Promise.all([
          this.prisma.share.count({ where: { neighborhoodId: n.id } }),
          this.prisma.groupBuy.count({ where: { neighborhoodId: n.id } }),
        ]);

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
