import type {  ShareItemRepository } from "@/domain/repositories/share/ShareItemRepository";
import { type ShareItem, PrismaClient } from "@/prisma/generated";

export class PrismaShareItemRepository implements ShareItemRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAvailableItems(excludeIds?: number[]): Promise<ShareItem[]> {
    return await this.prisma.shareItem.findMany({
      where: excludeIds?.length 
        ? { id : {notIn : excludeIds}}
        : undefined,
    });
  }
}
