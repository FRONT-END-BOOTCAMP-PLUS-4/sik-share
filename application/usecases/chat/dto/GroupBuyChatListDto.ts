export class GroupBuyChatListDto {
  constructor(
    public chatId: number,
    public groupBuyId: number,
    public groupBuyTitle: string,
    public imageUrl: string[],
    public lastMessage: string | null,
    public lastMessageAt: Date | null,
    public participantCount: number,
    public type: "together" = "together",
  ) {}
}