import type { ShareItemRepository } from "@/domain/repositories/share/ShareItemRepository";
import { type ShareItem, PrismaClient } from "@/prisma/generated";

export class PrismaShareItemRepository implements ShareItemRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll(): Promise<ShareItem[]> {
    return await this.prisma.shareItem.findMany();
  }
}
