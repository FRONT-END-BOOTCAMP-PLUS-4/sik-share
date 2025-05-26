import type { ReviewShortReviewRepository } from "@/domain/repositories/review/ReviewShortReviewRepository";
import { PrismaClient, type ReviewShortReview } from "@/prisma/generated";

export class PrismaReviewShortReviewRepository
  implements ReviewShortReviewRepository
{
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async save(reviewItems: ReviewShortReview[]) {
    await this.prisma.reviewShortReview.createMany({
      data : reviewItems
    })
  }
}
