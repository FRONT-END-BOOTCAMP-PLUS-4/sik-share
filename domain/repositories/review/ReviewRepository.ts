import type { Prisma, Review } from "@/prisma/generated";

export interface GetUserReviews {
  recipientId: string,
  offset: number,
  itemsPerPage: number,
}

export interface WriterProfile {
  writerShareScore: number;
  writerNickname: string;
  writerProfileUrl: string;
}


export interface ReviewRepository {
  getCount(where: Prisma.ReviewWhereInput): Promise<number>;
  getUserReviews(params: GetUserReviews): Promise<(Review & WriterProfile)[]>;
  getbyRecipientId(id: string): Promise<number[]>;
}
