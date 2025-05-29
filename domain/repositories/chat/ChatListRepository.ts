import type { ShareChatListItemDto } from "@/application/usecases/chat/dto/ChatListItemDto";
import type { GroupBuyChatListDto } from "@/application/usecases/chat/dto/GroupBuyChatListDto";

export interface ChatListRepository {
  findChatListByUserId(userId: string): Promise<ShareChatListItemDto[]>;
  getGroupBuyChatListByUserId(userId: string): Promise<GroupBuyChatListDto[]>;
}
