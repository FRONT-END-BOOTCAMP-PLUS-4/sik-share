export class UpdateUserProfileDto{
  constructor( 
    public userPublicId: string, 
    public nickName: string,
    public currentImageUrl: string,
    public newImageFile?: File | null,
  ){}
}