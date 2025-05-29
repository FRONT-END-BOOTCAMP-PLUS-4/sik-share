import { PrismaClient } from "@/prisma/generated";
import type { UpdateTogetherStatusRepository } from "@/domain/repositories/chatting/UpdateTogetherStatusRepository";

const prisma = new PrismaClient();

export class PrismaUpdateTogetherStatusRepository implements UpdateTogetherStatusRepository {
  async updateTogetherStatus(chatId: number): Promise<void> {
    const chat = await prisma.groupBuyChat.findUnique({
      where: { id: chatId },
      select: { groupBuyId: true },
    });

    if (!chat?.groupBuyId) {
      throw new Error("해당 채팅의 나눔 정보를 찾을 수 없습니다.");
    }

    await prisma.groupBuy.update({
      where: { id: chat.groupBuyId },
      data: { status: 2 },
    });
  }
}
