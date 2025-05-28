import type { Prisma, GroupBuy } from "@/prisma/generated";
import type { GetGroupBuyDetailDto } from "@/application/usecases/group-buy/dto/GetGroupBuyDetailDto";

export interface GetUserGroupbuys {
    where: Prisma.GroupBuyWhereInput,
    offset: number,
    itemsPerPage: number,
}

export interface GroupBuyRepository {
  save(groupBuy: Partial<GroupBuy>): Promise<GroupBuy>;
  getUserGroupbuys(shares: GetUserGroupbuys): Promise<(GroupBuy & {participants:number, thumbnailUrl: string})[]>;
  getCount(where: Prisma.GroupBuyWhereInput): Promise<number>;
  getDetail(groupBuyId: number): Promise<Partial<GetGroupBuyDetailDto> | null>;
  getList(
    offset: number,
    limit: number,
    neighborhoodId: number
  ): Promise<(Partial<GroupBuy> & { thumbnailUrl: string | null, currentUser: number, maxUser: number })[]>;
}
