export interface ShareChatRepository {
  create(data: { shareId: number }): Promise<{ id: number }>;
  getOwnerId(shareId: number): Promise<string>;
}
