import { PrismaClient } from "@/prisma/generated";
import type { GroupBuyChatRepository } from "@/domain/repositories/group-buy/GroupBuyChatRepository";

export class PrismaGroupBuyChatRepository implements GroupBuyChatRepository {
  private prisma = new PrismaClient();

  async findByGroupBuyId(groupBuyId: number): Promise<{ id: number } | null> {
    const chat = await this.prisma.groupBuyChat.findFirst({
      where: { groupBuyId },
      select: { id: true },
    });
    return chat;
  }
}
