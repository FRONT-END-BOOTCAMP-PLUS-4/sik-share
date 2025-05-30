export interface UpdateShareStatusRepository {
  updateShareStatus(chatId: number): Promise<void>;
}