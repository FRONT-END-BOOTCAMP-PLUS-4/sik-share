export class UpdateUserAddressDto{
  constructor( 
    public userPublicId: string, 
    public address : string,
    public neighborhoodName : string,
  ){}
}