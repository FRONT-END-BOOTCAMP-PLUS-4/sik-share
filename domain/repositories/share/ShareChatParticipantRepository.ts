export interface ShareChatParticipantRepository {
  addUserToChat(data: { chatId: number; userId: string }): Promise<void>;
}
