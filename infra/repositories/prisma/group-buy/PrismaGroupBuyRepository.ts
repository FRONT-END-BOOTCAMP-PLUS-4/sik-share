import type {
  GetUserGroupbuys,
  GroupBuyRepository,
} from "@/domain/repositories/group-buy/GroupBuyRepository";
import { type GroupBuy, type Prisma, PrismaClient } from "@/prisma/generated";

export class PrismaGroupBuyRepository implements GroupBuyRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async save(groupBuy: GroupBuy): Promise<GroupBuy> {
    return await this.prisma.groupBuy.create({
      data: groupBuy,
    });
  }

  async getUserGroupbuys({
    where,
    offset,
    itemsPerPage,
  }: GetUserGroupbuys): Promise<
    (GroupBuy & { participants: number; thumbnailUrl: string })[]
  > {
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
      },
    });

    return groupBuys.map((groupBuy) => ({
      ...groupBuy,
      participants: groupBuy.participants.length,
      thumbnailUrl:
        groupBuy.images?.[0]?.url ??
        "/assets/images/example/default-group-buys-thumbnail.png",
    }));
  }

  async getCount(where: Prisma.GroupBuyWhereInput): Promise<number> {
    return await this.prisma.groupBuy.count({ where });
  }
}
