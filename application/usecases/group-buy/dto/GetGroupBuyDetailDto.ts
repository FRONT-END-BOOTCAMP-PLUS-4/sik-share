export class GetGroupBuyDetailDto {
  constructor(
    public id: number,
    public title: string,
    public desc: string,
    public organizerId: string,
    public organizerPublicId: string,
    public organizerNickname: string,
    public organizerProfileUrl: string,
    public organizerShareScore: number,
    public participantProfileUrls: string[],
    public capacity: number,
    public currentParticipantCount: number,
    public meetingDate: Date,
    public locationNote: string,
    public lat: number,
    public lng: number,
    public desiredItem: string,
    public imageUrls: string[],
    public neighborhoodName: string,
    public status: number
  ) {}
}
