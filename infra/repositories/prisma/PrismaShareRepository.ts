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
  }: FindByOwnerAndStatus): Promise<Share[] | null> {

    return this.prisma.share.findMany({
      where,
      skip: offset,
      take: itemsPerPage,
      orderBy: { createdAt: "desc" },
      include: {
        shareItem: true,
        neighborhood: true,
        images: true,
      },
    });
  }
}
