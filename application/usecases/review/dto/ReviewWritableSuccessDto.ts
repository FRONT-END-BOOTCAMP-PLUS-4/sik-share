export class ReviewWritableSuccessDto{
  constructor(
    public recipientId: string,
    public recipientNickname: string,
    public canWrite = true,
  ){}
}