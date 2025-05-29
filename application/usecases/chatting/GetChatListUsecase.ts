import type { ChatListRepository } from "@/domain/repositories/chatting/ChatListRepository";
import type { ShareChatListItemDto } from "./dto/ChatListItemDto";

export class GetChatListUsecase {
  constructor(private readonly chatListRepository: ChatListRepository) {}

  async execute(userId: string): Promise<ShareChatListItemDto[]> {
    return await this.chatListRepository.findChatListByUserId(userId);
  }
}
