import type { ShareChatRepository } from '@/domain/repositories/share/ShareChatRepository';
import type { ShareChatParticipantRepository } from '@/domain/repositories/share/ShareChatParticipantRepository';
import type { GroupBuyParticipantRepository } from '@/domain/repositories/group-buy/GroupBuyParticipantRepository';
import type { CreateJoinDto } from './dto/CreateJoinDto';

export class CreateJoinUsecase {
  constructor(
    private shareChatRepo: ShareChatRepository,
    private shareChatParticipantRepo: ShareChatParticipantRepository,
    private groupBuyParticipantRepo: GroupBuyParticipantRepository,
  ) {}

  async execute(dto: CreateJoinDto) {
    if (dto.type === 'share') {
      const chat = await this.shareChatRepo.create({ shareId: dto.postId });
      await this.shareChatParticipantRepo.addUserToChat({
        chatId: chat.id,
        userId: dto.userId,
      });
    } else if (dto.type === 'groupbuy') {
      await this.groupBuyParticipantRepo.save({
        userId: dto.userId,
        groupBuyId: dto.postId,
      });
    } else {
      throw new Error('올바르지 않은 참여 유형입니다.');
    }
  }
}
