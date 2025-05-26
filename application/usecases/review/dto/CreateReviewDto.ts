export class CreateReviewDto{
  constructor(
    public shareId: number,
    public writerId: string,
    public grade: number,
    public shortReviews : number[],
    public content: string
  ){}
}