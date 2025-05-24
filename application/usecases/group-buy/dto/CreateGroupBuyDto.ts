export class CreateGroupBuyDto{
  constructor(
    public organizerId : string,
    public title : string,
    public lat : number,
    public lng : number,
    public neighborhoodName : string,
    public locationNote : string,
    public description : string,
    public capacity : number,
    public desiredItem : string,
    public meetingDate : Date,
    public images : File[]
  ){}
}