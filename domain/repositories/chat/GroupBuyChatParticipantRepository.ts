import { GroupBuyChatParticipant } from '@/prisma/generated';

export interface GroupBuyChatParticipantRepository{
  save(groupBuyChatId: number, userId: string) : Promise<GroupBuyChatParticipant>
}