import { PrismaClient } from "@/prisma/generated";
import type { ChatListRepository } from "@/domain/repositories/Chat/ChatListRepository";
import { ShareChatListItemDto } from "@/application/usecases/Chat/dto/ChatListItemDto";

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
            readCount: 1,
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
}
