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

  async replace(images: GroupBuyImage[]): Promise<void> {
    const tx = await this.prisma.$transaction([
      this.prisma.groupBuyImage.deleteMany({ where: { groupBuyId: images[0].groupBuyId } }),
      this.prisma.groupBuyImage.createMany({ data: images }),
    ]);
  }

  async deleteByGroupBuyId(groupBuyId : number) : Promise<void>{
    await this.prisma.groupBuyImage.deleteMany({ where : { groupBuyId }})
  }
}
