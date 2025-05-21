import type { ChatMessageListDto } from "@/application/usecases/Chat/dto/ChatMessageListDto";

export interface ChatMessageRepository {
  findMessagesByChatId(
    chatId: number,
    userId: string
  ): Promise<ChatMessageListDto[]>;

  findOtherUserByChatId(
    chatId: number,
    userId: string
  ): Promise<{
    nickname: string;
    imageUrl: string;
    temperature: number;
  }>;

  findShareInfoByChatId(
    chatId: number
  ): Promise<{
    title: string;
    thumbnailUrl: string;
    locationNote: string;
  }>;
}
