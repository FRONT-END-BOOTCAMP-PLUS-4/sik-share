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
      const candidateRooms = await this.shareChatRepo.findByShareId(dto.postId) as Array<{ id: number; participants: Array<{ userId: number }> }>;
      const ownerId = await this.shareChatRepo.getOwnerId(dto.postId);

      const myRoom = candidateRooms.find(
        (room) =>
          room.participants.length === 2 &&
          room.participants.some((p: { userId: number }) => p.userId === Number(dto.userId)) &&
          room.participants.some((p: { userId: number }) => p.userId === Number(ownerId))
      );
      if (myRoom) {
        return { chatId: myRoom.id };
      }

      const chat = await this.shareChatRepo.create({ shareId: dto.postId });
      await this.shareChatParticipantRepo.saveMany([
        { chatId: chat.id, userId: dto.userId },
        { chatId: chat.id, userId: ownerId },
      ]);
      return { chatId: chat.id };
    }

    if (dto.type === "groupbuy") {
      const chat = await this.groupBuyChatRepo.findByGroupBuyId(dto.postId);
      if (chat) {
        const already = await this.groupBuyChatParticipantRepo.find({
          chatId: chat.id,
          userId: dto.userId,
        });

        if (already) {
          return { chatId: chat.id };
        }

        await this.groupBuyParticipantRepo.save({
          groupBuyId: dto.postId,
          userId: dto.userId,
        });

        await this.groupBuyChatParticipantRepo.save({
          chatId: chat.id,
          userId: dto.userId,
        });
      }
      return { chatId: chat ? chat.id : undefined };
    }

    throw new Error("잘못된 타입입니다");
  }
}

