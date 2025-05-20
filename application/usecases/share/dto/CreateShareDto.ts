export class CreateShareDto{
  constructor(
    public shareItemId : number,
    public ownerId : string,
    public title : string,
    public lat : number,
    public lng : number,
    public locationAddress : string,
    public locationNote : string,
    public description : string,
    public status : number,
    public images : File[]
  ){}
}