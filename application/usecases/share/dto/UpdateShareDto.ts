export class UpdateShareDto {
  constructor(
    public shareId: number,
    public title : string,
    public lat : number,
    public lng : number,
    public neighborhoodName : string,
    public locationNote: string,
    public description: string,
    public images : File[]
  ){}
}