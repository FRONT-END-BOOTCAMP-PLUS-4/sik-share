export class GetShareDetailDto {
  constructor(
    public id: number,
    public title: string,
    public desc: string,
    public organizerId: string,
    public organizerPublicId: string,
    public organizerNickname: string,
    public organizerProfileUrl: string,
    public organizerShareScore: number,
    public createdAt: Date,
    public locationNote: string,
    public lat: number,
    public lng: number,
    public desiredItemName: string,
    public imageUrls: string[],
    public neighborhoodName: string,
    public remainingHours: number,
    public status: number
  ) {}
}
