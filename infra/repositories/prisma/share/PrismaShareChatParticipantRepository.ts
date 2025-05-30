import { PrismaClient } from "@/prisma/generated";
import type { ShareChatParticipantRepository } from "@/domain/repositories/share/ShareChatParticipantRepository";

export class PrismaShareChatParticipantRepository implements ShareChatParticipantRepository {
  private prisma = new PrismaClient();

  async addUserToChat(data: { chatId: number; userId: string }): Promise<void> {
    await this.prisma.shareChatParticipant.create({
      data: {
        shareChatId: data.chatId,
        userId: data.userId,
      },
    });
  }
}
