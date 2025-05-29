import type { ChatMessageRepository } from "@/domain/repositories/chatting/ChatMessageListRepository";
import { ChatDetailDto } from "@/application/usecases/chatting/dto/ChatDetailDto";
import type { ChatMessageListDto } from "@/application/usecases/chatting/dto/ChatMessageListDto";

export class GetShareChatListUsecase {
  constructor(private readonly chatMessageRepository: ChatMessageRepository) {}

  async execute(chatId: number, userId: string): Promise<ChatDetailDto> {
    const messages: ChatMessageListDto[] =
      await this.chatMessageRepository.findMessagesByChatId(chatId, userId);

    const otherUser = await this.chatMessageRepository.findOtherUserByChatId(
      chatId,
      userId
    );

    const shareInfo = await this.chatMessageRepository.findShareInfoByChatId(
      chatId
    );

    return new ChatDetailDto(messages, otherUser, shareInfo);
  }
}