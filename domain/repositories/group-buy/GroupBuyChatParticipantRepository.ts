export interface GroupBuyChatParticipantRepository {
  save(data: { chatId: number; userId: string }): Promise<void>;
  find(params: { chatId: number; userId: string }): Promise<boolean>;
}
