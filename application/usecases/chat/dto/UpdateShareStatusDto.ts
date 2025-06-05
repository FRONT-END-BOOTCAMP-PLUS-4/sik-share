export class UpdateShareStatusDto {
  constructor(    
    public chatId: number,
    public status: number,
    public myUserId: string,
    ){}
}