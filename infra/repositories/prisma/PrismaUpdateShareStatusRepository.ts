import { PrismaClient } from "@/prisma/generated";
import type { UpdateShareStatusRepository } from "@/domain/repositories/chat/UpdateShareStatusRepository";

const prisma = new PrismaClient();

export class PrismaUpdateShareStatusRepository implements UpdateShareStatusRepository {
  async updateShareStatus(chatId: number): Promise<void> {
    const chat = await prisma.shareChat.findUnique({
      where: { id: chatId },
      select: { shareId: true },
    });

    if (!chat?.shareId) {
      throw new Error("해당 채팅의 나눔 정보를 찾을 수 없습니다.");
    }

    await prisma.share.update({
      where: { id: chat.shareId },
      data: { status: 2 },
    });
  }
}
