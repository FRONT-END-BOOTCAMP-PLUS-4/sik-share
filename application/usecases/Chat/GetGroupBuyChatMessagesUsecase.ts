import type { GroupBuyChatMessageRepository } from "@/domain/repositories/Chat/GroupBuyChatMessageRepository";
import type { GroupBuyChatMessageListDto } from "./dto/GroupBuyChatMessageListDto";

export class GetGroupBuyChatMessagesUsecase {
  constructor(private readonly chatMessageRepository: GroupBuyChatMessageRepository) {}

  async execute(chatId: number, userId: string): Promise<GroupBuyChatMessageListDto[]> {
    return await this.chatMessageRepository.findMessagesByChatId(chatId, userId);
  }
}