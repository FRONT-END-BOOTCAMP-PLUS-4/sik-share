import type { ReviewRepository } from "@/domain/repositories/review/ReviewRepository";
import type { GetUserShortReviewsDto } from "./dto/GetUserShortReviewsDto";
import type { ReviewShortReviewRepository } from "@/domain/repositories/review/ReviewShortReviewRepository";
import type { ShortReviewOptionRepository } from "@/domain/repositories/review/ShortReviewOptionRepository";
import type { UserRepository } from "@/domain/repositories/UserRepository";

export class GetUserShortReviewsUsecase {
  constructor(
    private userRepo: UserRepository,
    private reviewRepo: ReviewRepository,
    private reviewShortReviewRepo: ReviewShortReviewRepository,
    private shortReviewOptionRepo: ShortReviewOptionRepository,
  ) {}

  async execute(id: number): Promise<GetUserShortReviewsDto[]> {
    const user = await this.userRepo.findByPublicId(id);
    if (!user) throw new Error("User not found");

    const reviewIds = await this.reviewRepo.getbyRecipientId(user.id);
    if (reviewIds.length === 0) return [];

    const counts =
      await this.reviewShortReviewRepo.getCountShortReviews(reviewIds);

    const result = await Promise.all(
      counts.map(async (counts) => {
        const content = await this.shortReviewOptionRepo.getContentById(
          counts.optionId,
        );
        return {
          id: counts.optionId,
          content: content,
          count: counts.count,
        };
      }),
    );

    return result;
  }
}

