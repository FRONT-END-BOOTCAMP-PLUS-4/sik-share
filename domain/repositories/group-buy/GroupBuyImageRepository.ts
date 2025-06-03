import type { GroupBuyImage } from "@/prisma/generated";

export interface GroupBuyImageRepository {
  save(images: Partial<GroupBuyImage>[]): Promise<void>;
  findByGroupBuyId(groupBuyId: number): Promise<GroupBuyImage[]>;
  replace(images: Partial<GroupBuyImage>[]) : Promise<void>;
  deleteByGroupBuyId(groupBuyId: number) : Promise<void>
}
