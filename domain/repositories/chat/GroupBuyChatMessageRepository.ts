import type { GroupBuyChatMessageListDto } from "@/application/usecases/chatting/dto/GroupBuyChatMessageListDto";

export interface GroupBuyChatMessageRepository {
  findMessagesByChatId(
    chatId: number,
    userId: string
  ): Promise<GroupBuyChatMessageListDto[]>;
  findGroupBuyInfoByChatId(
    chatId: number
  ): Promise<{
    title: string;
    meetingDate: string;
    imageUrl: string;
    participantCount: number;
    status: number;
  }>;
}
