import type { ShareChatListItemDto } from "@/application/usecases/chatting/dto/ChatListItemDto";
import type { GroupBuyChatListDto } from "@/application/usecases/chatting/dto/GroupBuyChatListDto";

export interface ChatListRepository {
  findChatListByUserId(userId: string): Promise<ShareChatListItemDto[]>;
  getGroupBuyChatListByUserId(userId: string): Promise<GroupBuyChatListDto[]>;
}
