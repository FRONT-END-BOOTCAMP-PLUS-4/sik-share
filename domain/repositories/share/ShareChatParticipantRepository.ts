export interface ShareChatParticipantRepository {
  save(data: { chatId: number; userId: string }): Promise<void>;
  saveMany(data: { chatId: number; userId: string }[]): Promise<void>;
}
