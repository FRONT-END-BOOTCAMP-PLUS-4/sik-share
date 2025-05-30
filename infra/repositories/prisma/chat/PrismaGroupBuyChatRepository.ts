import { GroupBuyChatRepository } from '@/domain/repositories/chat/GroupBuyChatRepository';
import { PrismaClient } from '@/prisma/generated';

export class PrismaGroupBuyChatRepository implements GroupBuyChatRepository{
  private prisma: PrismaClient;

  constructor(){
    this.prisma = new PrismaClient();
  }

  async save(groupBuyId: number) {
    return await this.prisma.groupBuyChat.create({
      data : {groupBuyId}
    })
  }
}