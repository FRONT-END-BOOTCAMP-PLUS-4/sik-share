import type { ReviewRepository } from "@/domain/repositories/review/ReviewRepository";
import { PrismaClient, type Review } from "@/prisma/generated";

export class PrismaReviewRepository implements ReviewRepository {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async save(review: Review): Promise<Review> {
    return await this.prisma.review.create({
      data: review
    })
  }
}
