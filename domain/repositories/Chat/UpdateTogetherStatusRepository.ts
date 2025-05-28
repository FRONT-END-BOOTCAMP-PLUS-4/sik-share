export interface UpdateTogetherStatusRepository {
  updateTogetherStatus(chatId: number): Promise<void>;
}