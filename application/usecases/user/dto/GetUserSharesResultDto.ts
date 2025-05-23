export class GetUserSharesDto{
  constructor( 
    public ownerId: string, 
    public status: "active" | "completed" | "expired",
    public page: number,
    public itemsPerPage: number,
  ){}
}