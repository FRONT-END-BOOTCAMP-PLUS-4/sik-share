export interface ShareChatRepository {
  create(data: { shareId: number }): Promise<{ id: number }>;
}
