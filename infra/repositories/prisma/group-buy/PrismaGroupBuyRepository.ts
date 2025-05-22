import type { GroupBuyRepository } from "@/domain/repositories/group-buy/GroupBuyRepository";
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
}
