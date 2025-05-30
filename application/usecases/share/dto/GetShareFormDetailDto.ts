export class getShareFormDetailDto{
  constructor(
    public shareItem : string,
    public title : string,
    public description: string,
    public neighborhoodName : string,
    public locationNote: string,
    public lat : number,
    public lng : number,
    public images : string[]
  ){}
}