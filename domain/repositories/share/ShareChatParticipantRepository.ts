export interface ShareChatParticipantRepository {
  save(data: { chatId: number; userId: string }): Promise<void>;
  saveMany(data: { chatId: number; userId: string }[]): Promise<void>;
  find(params: { chatId: number; userId: string }): Promise<boolean>;
}
