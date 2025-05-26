import type { Prisma, GroupBuy } from "@/prisma/generated";

export interface GetUserGroupbuys {
    where: Prisma.GroupBuyWhereInput,
    offset: number,
    itemsPerPage: number,
}

export interface GroupBuyRepository {
  save(groupBuy: Partial<GroupBuy>): Promise<GroupBuy>;
  getUserGroupbuys(shares: GetUserGroupbuys): Promise<(GroupBuy & {participants:number, thumbnailUrl: string})[]>;
}
