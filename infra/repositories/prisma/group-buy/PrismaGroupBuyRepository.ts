import type { FindByOwnerAndStatus, GroupBuyRepository } from "@/domain/repositories/group-buy/GroupBuyRepository";
import { type GroupBuy, PrismaClient } from "@/prisma/generated";

export class PrismaGroupBuyRepository implements GroupBuyRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async save(groupBuy: GroupBuy): Promise<GroupBuy> {
    return await this.prisma.groupBuy.create({
      data: groupBuy
    })
  }

  async findByOwnerAndStatus({
    where,
    offset,
    itemsPerPage,
  }: FindByOwnerAndStatus): Promise<(GroupBuy & {participants:number, thumbnailUrl: string})[]> {
    const groupBuys = await this.prisma.groupBuy.findMany({
      where,
      skip: offset,
      take: itemsPerPage,
      orderBy: { createdAt: "desc" },
      include: {
        images: {
          where: { order: 0 },
          take: 1,
        },
        participants: true,
      }
    });

    return groupBuys.map((groupBuy) => ({
      ...groupBuy,
      participants: groupBuy.participants.length,
      thumbnailUrl: groupBuy.images?.[0]?.url ?? "/assets/images/example/default-group-buys-thumbnail.png",
    }));
  }
}
