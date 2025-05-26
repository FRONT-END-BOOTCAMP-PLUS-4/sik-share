import type { GroupBuyParticipantRepository } from "@/domain/repositories/group-buy/GroupBuyParticipantRepository";
import { type GroupBuyParticipant, PrismaClient } from "@/prisma/generated";

export class PrismaGroupBuyParticipantRepository
  implements GroupBuyParticipantRepository
{
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async save(participant: GroupBuyParticipant): Promise<GroupBuyParticipant> {
    return await this.prisma.groupBuyParticipant.create({
      data: participant
    })
  }
}

