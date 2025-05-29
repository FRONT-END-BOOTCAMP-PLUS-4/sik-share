export interface UpdateMeetingDateRepository {
  updateMeetingDate(chatId: number, meetingDate: Date, status?: number): Promise<void>;
}