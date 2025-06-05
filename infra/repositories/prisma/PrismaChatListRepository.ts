import { PrismaClient } from "@/prisma/generated";
import type { ChatListRepository } from "@/domain/repositories/chat/ChatListRepository";
import { ShareChatListItemDto } from "@/application/usecases/chat/dto/ChatListItemDto";
import { GroupBuyChatListDto } from "@/application/usecases/chat/dto/GroupBuyChatListDto";

const prisma = new PrismaClient();

export class PrismaChatListRepository implements ChatListRepository {
  async findChatListByUserId(userId: string): Promise<ShareChatListItemDto[]> {
    const chats = await prisma.shareChat.findMany({
      where: {
        participants: {
          some: { userId },
        },
      },
      include: {
        messages: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
        participants: {
          include: {
            user: {
              select: {
                id: true,
                nickname: true,
                profileUrl: true,
                shareScore: true,
              },
            },
          },
        },
        share: {
          include: {
            images: true,
          },
        },
      },
    });

    chats.sort((a, b) => {
      const aDate = a.messages[0]?.createdAt
        ? new Date(a.messages[0].createdAt).getTime()
        : 0;
      const bDate = b.messages[0]?.createdAt
        ? new Date(b.messages[0].createdAt).getTime()
        : 0;
      return bDate - aDate;
    });

    return Promise.all(
      chats.map(async (chat) => {
        const lastMessage = chat.messages[0];
        const other = chat.participants.find((p) => p.user.id !== userId);

        const unreadCount = await prisma.shareChatMessage.count({
          where: {
            shareChatId: chat.id,
            senderId: { not: userId },
            shareChatMessageRead: {
              none: { userId },
            },
          },
        });

        const thumbnailUrl =
          chat.share?.images?.[0]?.url ??
          "/assets/images/example/thumbnail.png";

        return new ShareChatListItemDto(
          chat.id,
          other?.user.profileUrl ?? "/assets/images/example/thumbnail.png",
          other?.user.nickname ?? "알 수 없음",
          other?.user.shareScore ?? 36.5,
          lastMessage?.content ?? null,
          lastMessage?.createdAt ?? null,
          unreadCount,
          "share",
          thumbnailUrl,
          chat.share?.id ?? null,
        );
      }),
    );
  }

  async getGroupBuyChatListByUserId(
    userId: string,
  ): Promise<GroupBuyChatListDto[]> {
    const participants = await prisma.groupBuyChatParticipant.findMany({
      where: { userId },
      include: {
        groupBuyChat: {
          include: {
            groupBuy: {
              include: {
                images: {
                  where: { order: 0 },
                  take: 1,
                },
              },
            },
            messages: {
              orderBy: { createdAt: "desc" },
              take: 1,
            },
          },
        },
      },
    });

    const chatList = await Promise.all(
      participants.map(async (participant) => {
        const chat = participant.groupBuyChat;
        const groupBuy = chat.groupBuy;
        const lastMsg = chat.messages[0];
        const mainImage = groupBuy.images[0]?.url ?? null;

        const unreadCount = await prisma.groupBuyChatMessage.count({
          where: {
            groupBuyChatId: chat.id,
            senderId: { not: userId },
            groupBuyChatMessageRead: { none: { userId } },
          },
        });

        const participantCount = await prisma.groupBuyChatParticipant.count({
          where: { groupBuyChatId: chat.id },
        });

        return {
          ...new GroupBuyChatListDto(
            chat.id,
            groupBuy.id,
            groupBuy.title,
            mainImage ? [mainImage] : [],
            lastMsg ? lastMsg.content : null,
            lastMsg ? lastMsg.createdAt : null,
            participantCount,
            "together",
          ),
          unreadCount,
        };
      }),
    );

    chatList.sort((a, b) => {
      const aDate = a.lastMessageAt ? new Date(a.lastMessageAt).getTime() : 0;
      const bDate = b.lastMessageAt ? new Date(b.lastMessageAt).getTime() : 0;
      return bDate - aDate;
    });

    return chatList;
  }
}
