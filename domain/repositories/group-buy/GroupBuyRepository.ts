import type { GroupBuy } from "@/prisma/generated";

export interface GroupBuyRepository {
  save(groupBuy: Partial<GroupBuy>): Promise<GroupBuy>;
}
