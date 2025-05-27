export class GetUserReviewsResultDto {
  constructor(
    public id: number,
    public reviewContent: string | null,
    public writerName: string,
    public writerScore: number,
    public writerProfileUrl: string,
  ) {}
}