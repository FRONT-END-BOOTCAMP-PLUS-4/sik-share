import type { Share } from "@/prisma/generated";

export interface ShareRepository {
  getList(
    offset: number,
    limit: number,
    neighborhoodId: number,
  ): Promise<Share[]>;
}
