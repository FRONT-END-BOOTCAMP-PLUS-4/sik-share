import { PrismaClient } from "@/prisma/generated";
import type { ShareChatParticipantRepository } from "@/domain/repositories/share/ShareChatParticipantRepository";

export class PrismaShareChatParticipantRepository implements ShareChatParticipantRepository {
  private prisma = new PrismaClient();

  async save(data: { chatId: number; userId: string }): Promise<void> {
    await this.prisma.shareChatParticipant.create({
      data: {
        shareChatId: data.chatId,
        userId: data.userId,
      },
    });
  }

  async saveMany(data: { chatId: number; userId: string }[]): Promise<void> {
  await this.prisma.shareChatParticipant.createMany({
    data: data.map(({ chatId, userId }) => ({
      shareChatId: chatId,
      userId,
    })),
    skipDuplicates: true,
  });
}

}
