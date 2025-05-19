import { PrismaClient } from "@/prisma/generated";
import type { ChatMessageRepository } from "@/domain/repositories/Chat/ChatMessageListRepository";
import { ChatMessageListDto } from "@/application/usecases/Chat/dto/ChatMessageListDto";
import dayjs from "dayjs";

const prisma = new PrismaClient();

export class PrismaChatMessageRepository implements ChatMessageRepository {
  async findMessagesByChatId(chatId: number, userId: string): Promise<ChatMessageListDto[]> {
    const messages = await prisma.shareChatMessage.findMany({
      where: {
        shareChatId: chatId,
      },
      include: {
        sender: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return messages.map((msg) => {
      return new ChatMessageListDto(
        msg.id,
        msg.senderId === userId ? "me" : "other",
        msg.sender.nickname,
        msg.sender.profileUrl ?? "/assets/images/example/thumbnail.png",
        msg.content,
        dayjs(msg.createdAt).format("A h:mm"),
      );
    });
  }
}
