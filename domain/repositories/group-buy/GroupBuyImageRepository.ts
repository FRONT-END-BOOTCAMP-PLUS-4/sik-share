import type { GroupBuyImage } from "@/prisma/generated";

export interface GroupBuyImageRepository {
  save(images: Partial<GroupBuyImage>[]): Promise<void>;
  findByGroupBuyId(groupBuyId: number): Promise<GroupBuyImage[]>;
}
