import type { ShareChatListItemDto } from "@/application/usecases/Chat/dto/ChatListItemDto";
import type { GroupBuyChatListDto } from "@/application/usecases/Chat/dto/GroupBuyChatListDto";

export interface ChatListRepository {
  findChatListByUserId(userId: string): Promise<ShareChatListItemDto[]>;
  getGroupBuyChatListByUserId(userId: string): Promise<GroupBuyChatListDto[]>;
}
