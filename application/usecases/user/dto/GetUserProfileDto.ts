export class GetUserProfileDto{
  constructor( 
    public nickName: string, 
    public score : number,
    public neighborhoodName : string | undefined,
    public profileUrl: string | null,
  ){}
}