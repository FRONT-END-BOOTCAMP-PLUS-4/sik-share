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
  let type: "me" | "other" | "system";
  if (msg.senderId === "system") {
    type = "system";
  } else if (msg.senderId === userId) {
    type = "me";
  } else {
    type = "other";
  }

  return new ChatMessageListDto(
    msg.id,
    type,
    msg.senderId === "system" ? "system" : msg.sender.nickname,
    msg.senderId === "system"
      ? "/assets/images/example/thumbnail.png"
      : (msg.sender.profileUrl ?? "/assets/images/example/thumbnail.png"),
    msg.content,
    msg.createdAt.toISOString(),
    msg.readCount,
    msg.senderId,
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
): Promise<{
  id: number;
  title: string;
  imageUrl: string[];
  locationNote: string;
  meetingDate?: string;
  status: number;
  ownerId: string;
  recipientId: string | null;
  deletedAt: Date | null;
}> {
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
      id: true,
      title: true,
      locationNote: true,
      meetingDate: true,
      status: true,
      ownerId: true,
      recipientId: true,
      deletedAt: true,
    },
  });

  if (!share) {
    throw new Error("해당 나눔 정보를 찾을 수 없습니다.");
  }

  const images = await prisma.shareImage.findMany({
    where: { shareId },
    select: { url: true },
    orderBy: { id: "asc" },
  });

  const imageUrl = images.length > 0
    ? images.map((img) => img.url)
    : ["/assets/images/example/thumbnail.png"];

  return {
    id: share.id,
    title: share.title,
    locationNote: share.locationNote ?? "장소 정보 없음",
    imageUrl,
    meetingDate: share.meetingDate ? share.meetingDate.toISOString() : undefined,
    status: share.status,
    ownerId: share.ownerId,
    recipientId: share.recipientId,
    deletedAt: share.deletedAt,
  };
}
}
