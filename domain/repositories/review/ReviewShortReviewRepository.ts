import type { ReviewShortReview } from "@/prisma/generated";

export interface optionsCount {
  optionId: number;
  count: number;
}

export interface ReviewShortReviewRepository {
  save(reviewItems: Partial<ReviewShortReview>[]): Promise<void>;
  getCountShortReviews(reviewIds: number[]): Promise<optionsCount[]>;
}
