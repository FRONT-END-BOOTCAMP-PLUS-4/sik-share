import type { Prisma, GroupBuy } from "@/prisma/generated";

export interface FindByOwnerAndStatus {
    where: Prisma.GroupBuyWhereInput,
    offset: number,
    itemsPerPage: number,
}

export interface GroupBuyRepository {
  save(groupBuy: Partial<GroupBuy>): Promise<GroupBuy>;
  findByOwnerAndStatus(shares: FindByOwnerAndStatus): Promise<(GroupBuy & {participants:number, thumbnailUrl: string})[]>;
}
