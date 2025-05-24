export class GetUserSharesDto{
  constructor( 
    public publicId: number, 
    public status: "active" | "completed" | "expired",
    public page: number,
    public itemsPerPage: number,
  ){}
}