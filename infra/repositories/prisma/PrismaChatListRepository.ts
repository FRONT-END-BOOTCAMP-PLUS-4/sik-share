import { PrismaClient } from "@/prisma/generated";
import type { ChatListRepository } from "@/domain/repositories/chat/ChatListRepository";
import { ShareChatListItemDto } from "@/application/usecases/chatting/dto/ChatListItemDto";
import { GroupBuyChatListDto } from "@/application/usecases/chatting/dto/GroupBuyChatListDto";

const prisma = new PrismaClient();

export class PrismaChatListRepository implements ChatListRepository {
  // 1:1 나눔 채팅방 리스트
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
        const me = chat.participants.find((p) => p.user.id === userId);
        const other = chat.participants.find((p) => p.user.id !== userId);

        // 안읽은 메시지 개수 (상대방이 보낸 것 중 내가 안 읽은 것)
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

  // 단체채팅방(공동장보기) 리스트
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

    // 각 채팅방별로 unreadCount 포함시켜 반환
    const chatList = await Promise.all(
      participants.map(async (participant) => {
        const chat = participant.groupBuyChat;
        const groupBuy = chat.groupBuy;
        const lastMsg = chat.messages[0];
        const mainImage = groupBuy.images[0]?.url ?? null;

        // 🟢 안읽은 메시지 개수 (내가 안 읽은 메시지)
        const unreadCount = await prisma.groupBuyChatMessage.count({
          where: {
            groupBuyChatId: chat.id,
            senderId: { not: userId },
            GroupBuyChatMessageRead: { none: { userId } },
          },
        });

        // 채팅방 참여자 수
        const participantCount = await prisma.groupBuyChatParticipant.count({
          where: { groupBuyChatId: chat.id },
        });

        // 필요하면 GroupBuyChatListDto에 unreadCount 필드도 추가!
        // 아래에 unreadCount 같이 반환
        // (GroupBuyChatListDto에 unreadCount: number 추가 필요)
        return {
          ...new GroupBuyChatListDto(
            chat.id,
            groupBuy.id,
            groupBuy.title,
            mainImage ? [mainImage] : [],
            lastMsg ? lastMsg.content : null,
            lastMsg ? lastMsg.createdAt : null,
            participantCount,
            "together"
          ),
          unreadCount, // 이 필드가 프론트에서 필요하다면 Dto 정의도 수정
        };
      })
    );

    // 🟢 최신 메시지 기준으로 정렬
    chatList.sort((a, b) => {
      const aDate = a.lastMessageAt ? new Date(a.lastMessageAt).getTime() : 0;
      const bDate = b.lastMessageAt ? new Date(b.lastMessageAt).getTime() : 0;
      return bDate - aDate;
    });

    return chatList;
  }
}
