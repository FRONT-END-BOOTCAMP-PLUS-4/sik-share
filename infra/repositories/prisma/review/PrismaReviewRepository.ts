import type {
  GetUserReviews,
  ReviewRepository,
} from "@/domain/repositories/review/ReviewRepository";
import { type Prisma, PrismaClient, type Review } from "@/prisma/generated";

export class PrismaReviewRepository implements ReviewRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getUserReviews({
    publicId,
    offset,
    itemsPerPage,
  }: GetUserReviews): Promise<Review[]> {
    return this.prisma.review.findMany({
      where: { recipientId: publicId },
      skip: offset,
      take: itemsPerPage,
      orderBy: { createdAt: "desc" },
      include: {
        writer: true,
      },
    });
  }

  async getCount(where: Prisma.ReviewWhereInput): Promise<number> {
    return this.prisma.review.count({ where });
  }
}
