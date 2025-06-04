export interface UpdateMeetingDateRepository {
  updateMeetingDate(chatId: number, meetingDate: Date, myUserId: string): Promise<void>;
}