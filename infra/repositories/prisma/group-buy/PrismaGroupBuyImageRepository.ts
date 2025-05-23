import type { GroupBuyImageRepository } from "@/domain/repositories/group-buy/GroupBuyImageRepository";
import { type GroupBuyImage, PrismaClient } from "@/prisma/generated";

export class PrismaGroupBuyImageRepository implements GroupBuyImageRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async save(images: GroupBuyImage[]): Promise<void> {
    await this.prisma.groupBuyImage.createMany({data: images});
  }
  
  async findByGroupBuyId(groupBuyId: number): Promise<GroupBuyImage[]> {
    return await this.prisma.groupBuyImage.findMany({
      where : {groupBuyId},
      orderBy: {order: 'asc'}
    })
  }
}
