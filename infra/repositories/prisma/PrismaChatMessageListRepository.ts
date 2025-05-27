import { PrismaClient } from "@/prisma/generated";
import type { ChatMessageRepository } from "@/domain/repositories/chat/ChatMessageListRepository";
import { ChatMessageListDto } from "@/application/usecases/chat/dto/ChatMessageListDto";
import dayjs from "dayjs";

const prisma = new PrismaClient();

export class PrismaChatMessageRepository implements ChatMessageRepository {
  async findMessagesByChatId(
    chatId: number,
    userId: string
  ): Promise<ChatMessageListDto[]> {
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
    msg.createdAt.toISOString(),
    msg.readCount,
  );
});
  }

  async findOtherUserByChatId(
    chatId: number,
    userId: string
  ): Promise<{ nickname: string; imageUrl: string; temperature: number }> {
    const otherUser = await prisma.user.findFirst({
      where: {
        shareChatParticipants: {
          some: {
            shareChatId: chatId,
          },
        },
        id: {
          not: userId,
        },
      },
      select: {
        nickname: true,
        profileUrl: true,
        shareScore: true,
      },
    });

    if (!otherUser) {
      throw new Error("상대방 유저 정보를 찾을 수 없습니다.");
    }

    return {
      nickname: otherUser.nickname,
      imageUrl: otherUser.profileUrl ?? "/assets/images/example/thumbnail.png",
      temperature: otherUser.shareScore ?? 0,
    };
  }

  async findShareInfoByChatId(
  chatId: number
): Promise<{ title: string; thumbnailUrl: string; locationNote: string; meetingDate?: string; }> {
  const shareChat = await prisma.shareChat.findUnique({
    where: { id: chatId },
    select: { shareId: true },
  });

  if (!shareChat) {
    throw new Error("해당 채팅방을 찾을 수 없습니다.");
  }

  const shareId = shareChat.shareId;

  const share = await prisma.share.findUnique({
    where: { id: shareId },
    select: {
      title: true,
      locationNote: true,
      meetingDate: true,
    },
  });

  if (!share) {
    throw new Error("해당 나눔 정보를 찾을 수 없습니다.");
  }

  const image = await prisma.shareImage.findFirst({
    where: { shareId },
    select: { url: true },
    orderBy: { id: "asc" },
  });

  return {
    title: share.title,
    locationNote: share.locationNote ?? "장소 정보 없음",
    thumbnailUrl: image?.url ?? "/assets/images/example/thumbnail.png",
    meetingDate: share.meetingDate ? share.meetingDate.toISOString() : undefined,
  };
}

}
