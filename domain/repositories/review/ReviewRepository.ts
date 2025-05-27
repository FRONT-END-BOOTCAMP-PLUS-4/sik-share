import type { Review } from "@/prisma/generated";

export interface ReviewRepository {
  save(review: Partial<Review>): Promise<Review>;
  findByShareIdAndWriteId(shareId: number, writerId: string): Promise<Review | null>;
}
