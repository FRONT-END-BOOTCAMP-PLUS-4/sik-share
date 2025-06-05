export class GetShareListDto{
  constructor(
    public id: number,
    public neighborhoodId: number,
    public title: string,
    public locationNote: string,
    public createdAt: Date,
    public timeLeftInHours: number,
    public thumbnailUrl: string | null,
  ){}
}