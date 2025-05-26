import type { GroupBuy } from "@/prisma/generated";

export interface GroupBuyRepository {
  getList(
    offset: number,
    limit: number,
    neighborhoodId: number
  ): Promise<(Partial<GroupBuy> & { thumbnailUrl: string | null, currentUser: number, maxUser: number })[]>;
}
