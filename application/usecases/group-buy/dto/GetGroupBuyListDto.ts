export class GetGroupBuyListDto {
  constructor(
    public id: number,
    public neighborhoodId: number,
    public title: string,
    public locationNote: string,
    public meetingDate: Date,
    public thumbnailUrl: string | null,
    public currentUser: number,
    public maxUser: number,
  ) {}
}
