export class GetGroupBuyDetailDto {
  constructor(
    public title: string,
    public desc: string,
    public organizerNickname: string,
    public organizerProfileUrl: string,
    public organizerShareScore: number,
    public participantProfileUrls: string[],
    public capacity: number,
    public meetingDate: Date,
    public locationNote: string,
    public lat: number,
    public lng: number,
    public desiredItem: string,
  ) {}
}
