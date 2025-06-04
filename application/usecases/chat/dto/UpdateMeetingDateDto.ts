export class UpdateMeetingDateDto {
  constructor(    
    public chatId: number,
    public meetingDate: Date,
    public myUserId: string,
    ){}
}