import type {
  FindByOwnerAndStatus,
  ShareRepository,
} from "@/domain/repositories/ShareRepository";
import { type Share, PrismaClient } from "@/prisma/generated";

export class PrismaShareRepository implements ShareRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findByOwnerAndStatus({
    where,
    offset,
    itemsPerPage,
  }: FindByOwnerAndStatus): Promise<(Partial<Share> & {thumbnailUrl: string | null})[]> {

    const shares = await this.prisma.share.findMany({
      where,
      skip: offset,
      take: itemsPerPage,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        locationNote: true,
        createdAt: true,
        meetingDate: true,
        status: true,
        images: {
          where: { order: 0 },
          select: { url: true },
        },
      },
    });

    return shares.map((share) => ({
      ...share,
      thumbnailUrl: share.images[0].url ?? null,
  }));
  }
}
