import type { ChatMessageListDto } from "@/application/usecases/Chat/dto/ChatMessageListDto";

export interface ChatMessageRepository {
  findMessagesByChatId(
    chatId: number,
    userId: string,
  ): Promise<ChatMessageListDto[]>;
}
