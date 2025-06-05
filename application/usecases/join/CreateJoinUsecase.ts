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
      const myUserId = String(dto.userId);
      const ownerId = String(await this.shareChatRepo.getOwnerId(dto.postId));

      // 후보방 전부 가져오기 (userId는 string)
      const candidateRooms = (await this.shareChatRepo.findByShareId(dto.postId)) as Array<{
        id: number;
        participants: Array<{ userId: string }>;
      }>;

      // 내 방이 있는지 검사 (참여자 2명, 본인/개설자 둘 다 들어있으면)
      const myRoom = candidateRooms.find(
        (room) =>
          room.participants.length === 2 &&
          room.participants.some((p) => p.userId === myUserId) &&
          room.participants.some((p) => p.userId === ownerId)
      );
      if (myRoom) {
        return { chatId: myRoom.id };
      }

      // 없으면 새로 생성
      const chat = await this.shareChatRepo.create({ shareId: dto.postId });
      await this.shareChatParticipantRepo.saveMany([
        { chatId: chat.id, userId: myUserId },
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

        return { chatId: chat.id };
      }
      // 만약 채팅방이 없다면(이상 상황), chatId 없이 리턴
      return {};
    }

    throw new Error("잘못된 타입입니다");
  }
}
