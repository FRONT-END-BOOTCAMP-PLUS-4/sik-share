export interface GroupBuyChatRepository {
  findByGroupBuyId(groupBuyId: number): Promise<{ id: number } | null>;
}
