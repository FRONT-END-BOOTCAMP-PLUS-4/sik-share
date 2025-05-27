import type {
  GetUserReviews,
  ReviewRepository,
  WriterProfile,
} from "@/domain/repositories/review/ReviewRepository";
import { type Prisma, PrismaClient, type Review } from "@/prisma/generated";

export class PrismaReviewRepository implements ReviewRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getUserReviews({
    recipientId,
    offset,
    itemsPerPage,
  }: GetUserReviews): Promise<(Review & WriterProfile)[]> {
    const reviews = await this.prisma.review.findMany({
      where: {
        recipientId: recipientId,
        content: { not: null,},
      },
      skip: offset,
      take: itemsPerPage,
      orderBy: { createdAt: "desc" },
      include: {
        writer: {
          select: {
            shareScore: true,
            nickname: true,
            profileUrl: true,
          },
        },
      },
    });

    return reviews.map((review) => ({
      ...review,
      writerShareScore: review.writer?.shareScore ?? 0,
      writerNickname: review.writer?.nickname ?? "익명",
      writerProfileUrl: review.writer?.profileUrl ?? "",
    }));
  }

  async getCount(where: Prisma.ReviewWhereInput): Promise<number> {
    return this.prisma.review.count({ where });
  }
}
