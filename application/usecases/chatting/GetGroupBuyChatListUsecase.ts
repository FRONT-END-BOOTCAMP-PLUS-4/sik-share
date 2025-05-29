import type { ChatListRepository } from "@/domain/repositories/chatting/ChatListRepository";
import type { GroupBuyChatListDto } from "./dto/GroupBuyChatListDto";

export class GetGroupBuyChatListUsecase {
  constructor(private readonly chatListRepository: ChatListRepository) {}

  async execute(userId: string): Promise<GroupBuyChatListDto[]> {
    return await this.chatListRepository.getGroupBuyChatListByUserId(userId);
  }
}
