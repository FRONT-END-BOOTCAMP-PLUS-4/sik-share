import type { Prisma, Share } from "@/prisma/generated";

export interface FindByOwnerAndStatus {
    where: Prisma.ShareWhereInput,
    offset: number,
    itemsPerPage: number,
}

export interface ShareRepository {
  findByOwnerAndStatus(shares: FindByOwnerAndStatus): Promise<Share[] | null>;
}
