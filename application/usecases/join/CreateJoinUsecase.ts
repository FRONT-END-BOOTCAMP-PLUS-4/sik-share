import type { ShareChatRepository } from "@/domain/repositories/share/ShareChatRepository";
import type { ShareChatParticipantRepository } from "@/domain/repositories/share/ShareChatParticipantRepository";
import type { GroupBuyParticipantRepository } from "@/domain/repositories/group-buy/GroupBuyParticipantRepository";
import type { CreateJoinDto } from "./dto/CreateJoinDto";

export class CreateJoinUsecase {
  constructor(
    private shareChatRepo: ShareChatRepository,
    private shareChatParticipantRepo: ShareChatParticipantRepository,
    private groupBuyParticipantRepo: GroupBuyParticipantRepository,
  ) {}

  async execute(dto: CreateJoinDto): Promise<void> {
    if (dto.type === "share") {      
      const { id: chatId } = await this.shareChatRepo.create({ shareId: dto.postId });

      await this.shareChatParticipantRepo.saveMany([
        { chatId, userId: dto.userId },
        { chatId, userId: await this.shareChatRepo.getOwnerId(dto.postId) }, // 추가된 부분
      ]);
    }

    if (dto.type === "groupbuy") {
      await this.groupBuyParticipantRepo.save({
        groupBuyId: dto.postId,
        userId: dto.userId,
      });
    }
  }
}
