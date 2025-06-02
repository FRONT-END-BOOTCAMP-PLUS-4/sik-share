import { PrismaClient } from "@/prisma/generated";
import type { GroupBuyChatParticipantRepository } from "@/domain/repositories/group-buy/GroupBuyChatParticipantRepository";

export class PrismaGroupBuyChatParticipantRepository implements GroupBuyChatParticipantRepository {
  private prisma = new PrismaClient();

  async save({ chatId, userId }: { chatId: number; userId: string }) {
    await this.prisma.groupBuyChatParticipant.create({
      data: {
        groupBuyChatId: chatId,
        userId,
      },
    });
  }

  async find({ chatId, userId }: { chatId: number; userId: string }): Promise<boolean> {
    const found = await this.prisma.groupBuyChatParticipant.findFirst({
      where: {
        groupBuyChatId: chatId,
        userId,
      },
    });
    return !!found;
  }
}
