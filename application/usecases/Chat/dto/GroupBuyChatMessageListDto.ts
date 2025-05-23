export type GroupBuyChatSenderType = "me" | "other";

export class GroupBuyChatMessageListDto {
  constructor(
    public id: number,
    public type: GroupBuyChatSenderType,
    public nickname: string,
    public imageUrl: string,
    public message: string,
    public time: string,
    public readCount?: number,
  ) {}
}