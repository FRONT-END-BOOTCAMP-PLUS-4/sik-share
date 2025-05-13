export class CreateUserDto{
  constructor(
    public email: string, 
    public nickname: string, 
    public profileUrl: string
  ){}
}