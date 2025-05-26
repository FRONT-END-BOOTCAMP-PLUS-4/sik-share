import type { Prisma, Share } from "@/prisma/generated";

export interface GetUserShares {
    where: Prisma.ShareWhereInput,
    offset: number,
    itemsPerPage: number,
}

export interface ShareRepository {
  save(share: Partial<Share>): Promise<Share>;
  getUserShares(shares: GetUserShares): Promise<(Share & {thumbnailUrl: string | null})[]>;
}
