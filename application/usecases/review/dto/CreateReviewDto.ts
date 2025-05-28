export class CreateReviewDto{
  constructor(
    public shareId: number,
    public writerId: string,
    public recipientId: string,
    public grade: number,
    public shortReviews : number[],
    public content: string
  ){}
}