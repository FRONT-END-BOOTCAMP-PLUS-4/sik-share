import type { CreateReviewDto } from "./dto/CreateReviewDto";
import type { ShareRepository } from "@/domain/repositories/share/ShareRepository";
import type { ReviewRepository } from "@/domain/repositories/review/ReviewRepository";
import type { ReviewShortReviewRepository } from "@/domain/repositories/review/ReviewShortReviewRepository";

export class CreateReviewUsecase {
  constructor(
    private shareRepo: ShareRepository,
    private reviewRepo: ReviewRepository,
    private reviewShortReviewRepo: ReviewShortReviewRepository,
  ) {}

  async execute(review: CreateReviewDto) {
    const share = await this.shareRepo.findById(review.shareId);

    if(!share){
      throw new Error('존재하지 않는 후기입니다.');
    }

    if(!share.recipientId){
      throw new Error('성사되지 않은 나눔입니다.');
    }

    const result = await this.reviewRepo.save({
      recipientId: share.recipientId,
      writerId: review.writerId,
      grade: review.grade,
      content : review.content
    });

    const reviewShortReviews = review.shortReviews
      .map((shortReviewOptionId) => ({ reviewId : result.id, shortReviewOptionId }));
    
    await this.reviewShortReviewRepo.save(reviewShortReviews);
  }
}
