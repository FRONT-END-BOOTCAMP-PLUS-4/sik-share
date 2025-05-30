import { GroupBuyChatParticipantRepository } from '@/domain/repositories/chat/GroupBuyChatParticipantRepository';
import { GroupBuyChatParticipant, PrismaClient } from '@/prisma/generated';

export class PrismaGroupBuyChatParticipantRepository implements GroupBuyChatParticipantRepository{
  private prisma: PrismaClient;

  constructor(){
    this.prisma = new PrismaClient();
  }

  async save(groupBuyChatId: number, userId: string): Promise<GroupBuyChatParticipant> {
    return await this.prisma.groupBuyChatParticipant.create({
      data : {groupBuyChatId, userId}
    })
  }
}