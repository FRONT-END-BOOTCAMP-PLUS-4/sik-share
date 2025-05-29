import type { GroupBuyChatMessageRepository } from "@/domain/repositories/chat/GroupBuyChatMessageRepository";

export class GetGroupBuyChatInfoUsecase {
  constructor(private readonly chatMessageRepository: GroupBuyChatMessageRepository) {}

  async execute(chatId: number) {
    return await this.chatMessageRepository.findGroupBuyInfoByChatId(chatId);
  }
}