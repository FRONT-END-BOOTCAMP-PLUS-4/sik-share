import type { ReviewRepository } from "@/domain/repositories/review/ReviewRepository";
import type { UserRepository } from "@/domain/repositories/UserRepository";
import type { GetUserReviewsDto } from "./dto/GetUserReviewsDto";
import type { GetUserReviewsResultDto } from "./dto/GetUserReviewsResultDto";

export class GetUserReviewsUsecase {
  constructor(
    private userRepo: UserRepository,
    private reviewRepo: ReviewRepository,
  ) {}

  async execute(reviewsByUser: GetUserReviewsDto): Promise<GetUserReviewsResultDto[] | null> {
    const { publicId, page, itemsPerPage } = reviewsByUser;
    const user = await this.userRepo.findByPublicId(publicId);

    if (!user) {
      return null;
    }

    const data = await this.reviewRepo.getUserReviews({
      recipientId: user.id,
      offset: page * itemsPerPage,
      itemsPerPage,
    });

    if (!data || data.length === 0) {
      return [];
    }

    return data.map((review) => ({
      id: review.id,
      reviewContent: review.content,
      writerName: review.writerNickname,
      writerProfileUrl: review.writerProfileUrl,
      writerScore: review.writerShareScore,
    }));
  }
}
