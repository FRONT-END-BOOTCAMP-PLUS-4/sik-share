import type {
  GetUserShares,
  ShareRepository,
} from "@/domain/repositories/share/ShareRepository";
import { type Prisma, PrismaClient, type Share } from "@/prisma/generated";

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

  async getUserShares({
    where,
    offset,
    itemsPerPage,
  }: GetUserShares): Promise<(Share & { thumbnailUrl: string | null })[]> {
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
      },
    });

    return shares.map((share) => ({
      ...share,
      thumbnailUrl: share.images?.[0]?.url ?? null,
    }));
  }

  async getCount(where: Prisma.ShareWhereInput): Promise<number> {
    return await this.prisma.share.count({ where });
  }

  async findById(id: number) : Promise<Share | null>{
    return await this.prisma.share.findUnique({
      where: {id}
    })
  }
}
