export class GetUserShortReviewsDto {
  constructor(
    public id: number,
    public content: string,
    public count: number,
  ) {}
}