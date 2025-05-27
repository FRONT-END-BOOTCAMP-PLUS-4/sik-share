export interface optionsCount {
  optionId: number;
  count: number;
}

export interface ReviewShortReviewRepository {
  getCountShortReviews(reviewIds: number[]): Promise<optionsCount[]>;
}