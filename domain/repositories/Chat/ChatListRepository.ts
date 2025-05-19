import type { ShareChatListItemDto } from "@/application/usecases/Chat/dto/ChatListItemDto";

export interface ChatListRepository {
  findChatListByUserId(userId: string): Promise<ShareChatListItemDto[]>;
}