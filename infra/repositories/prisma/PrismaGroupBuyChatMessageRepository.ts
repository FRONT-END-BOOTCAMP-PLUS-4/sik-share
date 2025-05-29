import { PrismaClient } from "@/prisma/generated";
import type { GroupBuyChatMessageRepository } from "@/domain/repositories/chat/GroupBuyChatMessageRepository";
import { GroupBuyChatMessageListDto } from "@/application/usecases/chatting/dto/GroupBuyChatMessageListDto";

const prisma = new PrismaClient();

export class PrismaGroupBuyChatMessageRepository implements GroupBuyChatMessageRepository {
  async findMessagesByChatId(
    chatId: number,
    userId: string
  ): Promise<GroupBuyChatMessageListDto[]> {
    const messages = await prisma.groupBuyChatMessage.findMany({
      where: { groupBuyChatId: chatId },
      include: { sender: true },
      orderBy: { createdAt: "asc" },
    });

    return messages.map((msg) => 
      new GroupBuyChatMessageListDto(
        msg.id,
        msg.senderId === userId ? "me" : "other",
        msg.sender.nickname,
        msg.sender.profileUrl ?? "/assets/images/example/thumbnail.png",
        msg.content,
        msg.createdAt.toISOString(),
        msg.count
      )
    );
  }

  async findGroupBuyInfoByChatId(
    chatId: number
  ): Promise<{
    title: string;
    meetingDate: string;
    imageUrl: string;
    participantCount: number;
    locationNote: string;
    status: number;
  }> {
    const chat = await prisma.groupBuyChat.findUnique({
      where: { id: chatId },
      include: {
        groupBuy: {
          include: {
            images: { orderBy: { order: "asc" }, take: 1 },
            participants: true,
          },
        },
        participants: true,
      },
    });

    if (!chat || !chat.groupBuy) throw new Error("채팅방/공동구매 정보를 찾을 수 없습니다.");

    const { groupBuy } = chat;
    return {
      title: groupBuy.title,
      meetingDate: groupBuy.meetingDate.toISOString(),
      imageUrl: groupBuy.images[0]?.url ?? "/assets/images/example/default-profile.png",
      participantCount: chat.participants.length,
      locationNote: groupBuy.locationNote,
      status: groupBuy.status,
    };
  }
}
