import type { GroupBuyParticipant } from "@/prisma/generated";

export interface GroupBuyParticipantRepository {
  save(
    participant: Partial<GroupBuyParticipant>,
  ): Promise<GroupBuyParticipant>;
}
  

