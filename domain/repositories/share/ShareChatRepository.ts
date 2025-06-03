export interface ShareChatRepository {
  findByShareId(postId: number): unknown;
  create(data: { shareId: number }): Promise<{ id: number }>;
  getOwnerId(shareId: number): Promise<string>;
}
