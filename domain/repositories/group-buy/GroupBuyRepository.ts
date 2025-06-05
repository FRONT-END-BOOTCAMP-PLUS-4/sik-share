import type { Prisma, GroupBuy } from "@/prisma/generated";
import type { GetGroupBuyDetailDto } from "@/application/usecases/group-buy/dto/GetGroupBuyDetailDto";

export interface GetUserGroupbuys {
    where: Prisma.GroupBuyWhereInput,
    offset: number,
    itemsPerPage: number,
}

type GroupBuyFormDetail = Prisma.GroupBuyGetPayload<{
  include: {
    images: {
      select: {
        url: true;
      };
    };
    neighborhood: {
      select: {
        name: true;
      };
    };
  };
}>;


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
  softDelete(id: number): Promise<void>;
  update(groupBuy: Partial<GroupBuy>): Promise<GroupBuy>;
  getFormDetail(groupBuyId: number) : Promise<GroupBuyFormDetail | null>
  countAll(): Promise<number>;
}
