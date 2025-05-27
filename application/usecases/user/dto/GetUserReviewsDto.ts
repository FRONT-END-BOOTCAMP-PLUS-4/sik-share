export class GetUserReviewsDto {
  constructor(
    public publicId: number,
    public page: number,
    public itemsPerPage: number,
  ) {}
}
