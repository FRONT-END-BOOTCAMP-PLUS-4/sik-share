export class UpdateGroupBuyDto{
  constructor(
    public groupBuyId: number,
    public title : string,
    public lat : number,
    public lng : number,
    public neighborhoodName : string,
    public locationNote : string,
    public description : string,
    public desiredItem : string,
    public meetingDate : Date,
    public images : File[]
  ){}
}