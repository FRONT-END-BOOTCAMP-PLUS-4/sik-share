export interface UpdateShareStatusRepository {
  updateShareStatus(chatId: number, myUserId: string): Promise<void>;
}