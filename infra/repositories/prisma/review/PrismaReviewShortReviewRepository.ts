import type {
  optionsCount,
  ReviewShortReviewRepository,
} from "@/domain/repositories/review/ReviewShortReviewRepository";
import { PrismaClient, type ReviewShortReview } from "@/prisma/generated";

export class PrismaReviewShortReviewRepository implements ReviewShortReviewRepository {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async save(reviewItems: ReviewShortReview[]) {
    await this.prisma.reviewShortReview.createMany({
      data : reviewItems
    })
  }

  async getCountShortReviews(reviewIds: number[]): Promise<optionsCount[]> {
    const counts = await this.prisma.reviewShortReview.groupBy({
      by: ["shortReviewOptionId"],
      where: {
        reviewId: {
          in: reviewIds,
        },
      },
      orderBy:{ shortReviewOptionId: "asc" },
      _count: {
        shortReviewOptionId: true,
      },
      
    });

    return counts.map((count) => ({
      optionId: count.shortReviewOptionId,
      count: count._count.shortReviewOptionId,
    }));
  }
}
