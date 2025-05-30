export class GetGroupBuyFormDetailDto{
  constructor(
    public title: string,
    public description: string,
    public lat: number,
    public lng: number,
    public neighborhoodName: string,
    public locationNote: string,
    public capacity: number,
    public desiredItem: string,
    public meetingDate: Date,
    public images: string[],
  ){}
}