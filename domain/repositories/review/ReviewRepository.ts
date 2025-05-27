import type { Prisma, Review } from "@/prisma/generated";

export interface GetUserReviews {
  publicId: string,
  offset: number,
  itemsPerPage: number,
}

export interface ReviewRepository {
    getUserReviews: ( params: GetUserReviews) => Promise<Review[]>;
    getCount(where: Prisma.ReviewWhereInput): Promise<number>;
}
