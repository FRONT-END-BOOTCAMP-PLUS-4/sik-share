import type { ChatMessageListDto } from "./ChatMessageListDto";

export class ChatDetailDto {
  constructor(
    public messages: ChatMessageListDto[],
    public otherUser: {
      nickname: string;
      imageUrl: string;
      temperature: number;
    },
    public shareInfo: {
      title: string;
      imageUrl: string[];
      locationNote: string;
      meetingDate?: string;
      status: number;
    }
  ) {}
}
