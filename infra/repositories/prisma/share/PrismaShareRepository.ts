import type { ShareRepository } from "@/domain/repositories/share/ShareRepository";
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
}
