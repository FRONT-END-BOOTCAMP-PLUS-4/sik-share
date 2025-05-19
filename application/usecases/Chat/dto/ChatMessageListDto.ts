export type ChatSenderType = "me" | "other";

export class ChatMessageListDto {
  constructor(
    public id: string,
    public type: ChatSenderType,
    public nickname: string,
    public profileImage: string,
    public message: string,
    public time: string,
  ) {}
}