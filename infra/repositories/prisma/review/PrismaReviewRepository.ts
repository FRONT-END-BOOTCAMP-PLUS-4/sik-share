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

  async save(review: Review): Promise<Review> {
    return await this.prisma.review.create({
      data: review
    })
  }

  async findByShareIdAndWriteId(shareId: number, writerId: string): Promise<Review | null> {
    return await this.prisma.review.findFirst({
      where: {
        shareId: shareId,
        writerId: writerId
      }
    })
  }
  
  async getCount(where: Prisma.ReviewWhereInput): Promise<number> {
    return this.prisma.review.count({ where });
  }

  async getUserReviews({
    recipientId,
    offset,
    itemsPerPage,
  }: GetUserReviews): Promise<(Review & WriterProfile)[]> {
    const reviews = await this.prisma.review.findMany({
      where: {
        recipientId: recipientId,
        content: { not: "" },
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

  async getbyRecipientId(id: string): Promise<number[]> {
    const reviews = await this.prisma.review.findMany({
      where: { recipientId: id },
      select: { id: true },
    });

    return reviews.map((r) => r.id);
  }
}
