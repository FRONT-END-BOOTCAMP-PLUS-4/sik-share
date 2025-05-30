export type ChatSenderType = "me" | "other" | "system";

export class ChatMessageListDto {
  constructor(
    public id: number,
    public type: ChatSenderType,
    public nickname: string,
    public imageUrl: string,
    public message: string,
    public time: string,
    public readCount?: number,
  ) {}
}