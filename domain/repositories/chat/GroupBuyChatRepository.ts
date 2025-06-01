import type { GroupBuyChat } from "@/prisma/generated";

export interface GroupBuyChatRepository {
  save(groupBuyId: number): Promise<GroupBuyChat>;
}
