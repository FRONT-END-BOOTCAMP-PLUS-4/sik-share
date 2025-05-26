import type { ReviewShortReview } from "@/prisma/generated";

export interface ReviewShortReviewRepository {
  save(reviewItems: Partial<ReviewShortReview>[]): Promise<void>;
}
