export class UpdateUserProfileDto{
  constructor( 
    public userId: string, 
    public nickName: string,
    public currentImageUrl: string,
    public newImageFile?: File | null,
  ){}
}