export class ShareChatListItemDto {
  constructor(
    public chatId: number,
    public imageUrl: string,
    public nickname: string,
    public temperature: number,
    public lastMessage: string,
    public lastMessageAt: Date,
    public unreadCount: number,
    public type: "share" = "share",
  ) {}
}
