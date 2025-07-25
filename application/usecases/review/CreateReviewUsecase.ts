import type { CreateReviewDto } from "./dto/CreateReviewDto";
import type { ShareRepository } from "@/domain/repositories/share/ShareRepository";
import type { ReviewRepository } from "@/domain/repositories/review/ReviewRepository";
import type { ReviewShortReviewRepository } from "@/domain/repositories/review/ReviewShortReviewRepository";
import type { UserRepository } from "@/domain/repositories/UserRepository";

export class CreateReviewUsecase {
  constructor(
    private reviewRepo: ReviewRepository,
    private reviewShortReviewRepo: ReviewShortReviewRepository,
    private userRepo: UserRepository,
  ) {}

  async execute(review: CreateReviewDto) {
    // 후기 데이터 생성
    const result = await this.reviewRepo.save({
      recipientId: review.recipientId,
      shareId: review.shareId,
      writerId: review.writerId,
      grade: review.grade,
      content: review.content,
    });

    // 후기-한줄평 데이터 생성
    const reviewShortReviews = review.shortReviews.map(
      (shortReviewOptionId) => ({ reviewId: result.id, shortReviewOptionId }),
    );
    await this.reviewShortReviewRepo.save(reviewShortReviews);

    // 나눔지수 업데이트
    const user = await this.userRepo.findById(review.recipientId);
    if (!user) {
      throw new Error("후기를 받는 회원이 존재하지 않습니다.");
    }

    let newShareScore = user.shareScore;
    switch (result.grade) {
      case 0: {
        newShareScore = newShareScore - 2 > -100 ? newShareScore - 2 : -100;
        break;
      }
      case 1: {
        newShareScore = newShareScore + 1 < 100 ? newShareScore + 1 : 100;
        break;
      }
      case 2: {
        newShareScore = newShareScore + 2 < 100 ? newShareScore + 2 : 100;
        break;
      }
    }

    await this.userRepo.update({
      id: review.recipientId,
      shareScore: newShareScore
    });
  }
}
