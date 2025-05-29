import type { Prisma, Share } from "@/prisma/generated";
import type { GetShareDetailDto } from "@/application/usecases/share/dto/GetShareDetailDto";

export interface GetUserShares {
    where: Prisma.ShareWhereInput,
    offset: number,
    itemsPerPage: number,
}

export interface ShareRepository {
  save(share: Partial<Share>): Promise<Share>;
  getUserShares(shares: GetUserShares): Promise<(Share & {thumbnailUrl: string | null})[]>;
  getCount(where: Prisma.ShareWhereInput): Promise<number>;
  findById(id:number):Promise<Share | null>;

  getDetail(shareId: number): Promise<Partial<GetShareDetailDto> | null>;
  getList(
    offset: number,
    limit: number,
    neighborhoodId: number
  ): Promise<(Partial<Share> & { thumbnailUrl: string | null })[]>;
  update(share: Partial<Share>): Promise<Share>;
  softDelete(id:number):Promise<void>;
}
