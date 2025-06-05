export class CreateUserDto{
  constructor(
    public email: string, 
    public nickname: string, 
    public address : string,
    public neighborhoodName : string,
    public profileUrl: string | null,
  ){}
}