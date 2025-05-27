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
        share: true,
      },
    });

    return Promise.all(
      chats.map(async (chat) => {
        const lastMessage = chat.messages[0];
        const me = chat.participants.find((p) => p.user.id === userId);
        const other = chat.participants.find((p) => p.user.id !== userId);

        // 안읽은 메시지(상대방이 보낸 readCount === 1인 메시지 개수)
        const unreadCount = await prisma.shareChatMessage.count({
          where: {
            shareChatId: chat.id,
            senderId: { not: userId },
            ShareChatMessageRead: {
              none: { userId },
            },
          },
        });

        return new ShareChatListItemDto(
          chat.id,
          other?.user.profileUrl ?? "/assets/images/example/thumbnail.png",
          other?.user.nickname ?? "알 수 없음",
          other?.user.shareScore ?? 36.5,
          lastMessage?.content ?? null,
          lastMessage?.createdAt ?? null,
          unreadCount
        );
      })
    );
  }

  // 공동장보기(단체) 채팅방 리스트
async getGroupBuyChatListByUserId(userId: string): Promise<GroupBuyChatListDto[]> {
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

  // participantCount를 await로 각각 조회해야 하므로 map + Promise.all 사용
  return await Promise.all(
    participants.map(async (participant) => {
      const chat = participant.groupBuyChat;
      const groupBuy = chat.groupBuy;
      const lastMsg = chat.messages[0];
      const mainImage = groupBuy.images[0]?.url ?? null;

      // 진짜 채팅방 참여자 수를 카운트 (groupBuyChatParticipant에서 groupBuyChatId 기준)
      const participantCount = await prisma.groupBuyChatParticipant.count({
        where: { groupBuyChatId: chat.id },
      });

      return new GroupBuyChatListDto(
        chat.id,
        groupBuy.id,
        groupBuy.title,
        mainImage ? [mainImage] : [],
        lastMsg ? lastMsg.content : null,
        lastMsg ? lastMsg.createdAt : null,
        participantCount,
        "together",
      );
    })
  );
}
}
