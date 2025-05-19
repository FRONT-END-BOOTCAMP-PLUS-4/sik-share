import type { ChatMessageRepository } from "@/domain/repositories/Chat/ChatMessageListRepository";
import type { ChatMessageListDto } from "@/application/usecases/Chat/dto/ChatMessageListDto";

export class GetChatMessagesUsecase {
  constructor(private readonly chatMessageRepository: ChatMessageRepository) {}

  async execute(userId: string, chatId: number ): Promise<ChatMessageListDto[]> {
    return await this.chatMessageRepository.findMessagesByChatId(
      userId,
      chatId,
    );
  }
}
