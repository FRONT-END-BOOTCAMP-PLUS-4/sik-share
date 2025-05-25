import type { FindByOwnerAndStatus, ShareRepository } from "@/domain/repositories/share/ShareRepository";
import { PrismaClient, type Share } from "@/prisma/generated";

export class PrismaShareRepository implements ShareRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async save(share: Share): Promise<Share> {
    return await this.prisma.share.create({
      data: share,
    });
  }

  async findByOwnerAndStatus({
      where,
      offset,
      itemsPerPage,
    }: FindByOwnerAndStatus): Promise<(Share & {thumbnailUrl: string | null})[]> {
  
      const shares = await this.prisma.share.findMany({
        where,
        skip: offset,
        take: itemsPerPage,
        orderBy: { createdAt: "desc" },
        include: {
          images: {
            where: { order: 0 },
            take: 1,
          },
        }
      });
  
      return shares.map((share) => ({
        ...share,
        thumbnailUrl: share.images?.[0]?.url ?? null,
    }));
  }
}
