import type { Prisma, Share } from "@/prisma/generated";

export interface FindByOwnerAndStatus {
    where: Prisma.ShareWhereInput,
    offset: number,
    itemsPerPage: number,
}

export interface ShareRepository {
  save(share: Partial<Share>): Promise<Share>;
  findByOwnerAndStatus(shares: FindByOwnerAndStatus): Promise<(Share & {thumbnailUrl: string | null})[]>;
}
