import type { ShareChatRepository } from "@/domain/repositories/share/ShareChatRepository";
import type { ShareChatParticipantRepository } from "@/domain/repositories/share/ShareChatParticipantRepository";
import type { GroupBuyParticipantRepository } from "@/domain/repositories/group-buy/GroupBuyParticipantRepository";
import type { GroupBuyChatRepository } from "@/domain/repositories/group-buy/GroupBuyChatRepository";
import type { GroupBuyChatParticipantRepository } from "@/domain/repositories/group-buy/GroupBuyChatParticipantRepository";
import type { CreateJoinDto } from "./dto/CreateJoinDto";

export class CreateJoinUsecase {
  constructor(
    private shareChatRepo: ShareChatRepository,
    private shareChatParticipantRepo: ShareChatParticipantRepository,
    private groupBuyParticipantRepo: GroupBuyParticipantRepository,
    private groupBuyChatRepo: GroupBuyChatRepository,
    private groupBuyChatParticipantRepo: GroupBuyChatParticipantRepository,
  ) {}

  async execute(dto: CreateJoinDto): Promise<{ chatId?: number }> {
    if (dto.type === "share") {      
      const { id: chatId } = await this.shareChatRepo.create({ shareId: dto.postId });

      await this.shareChatParticipantRepo.saveMany([
        { chatId, userId: dto.userId },
        { chatId, userId: await this.shareChatRepo.getOwnerId(dto.postId) },
      ]);

      return { chatId };
    }

    if (dto.type === "groupbuy") {
      await this.groupBuyParticipantRepo.save({
        groupBuyId: dto.postId,
        userId: dto.userId,
      });

      // 같이장보기 채팅방 찾기
      const chat = await this.groupBuyChatRepo.findByGroupBuyId(dto.postId);
      if (chat) {
        // 필요하다면 참여자 테이블에도 추가
        const already = await this.groupBuyChatParticipantRepo.find({
          chatId: chat.id,
          userId: dto.userId,
        });
        if (!already) {
          await this.groupBuyChatParticipantRepo.save({
            chatId: chat.id,
            userId: dto.userId,
          });
        }
        return { chatId: chat.id };
      }
      return {};
    }

    throw new Error("잘못된 타입입니다");
  }
}
