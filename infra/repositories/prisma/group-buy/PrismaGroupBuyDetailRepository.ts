import { PrismaClient } from "@/prisma/generated";
import type { GroupBuyDetailRepository } from "@/domain/repositories/group-buy/GroupBuyDetailRepository";
import { GetGroupBuyDetailDto } from "@/application/usecases/group-buy/dto/GetGroupBuyDetailDto";

export class PrismaGroupBuyDetailRepository
  implements GroupBuyDetailRepository
{
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getDetail(id: number): Promise<GetGroupBuyDetailDto | null> {
    const groupBuy = await this.prisma.groupBuy.findUnique({
      where: { id },
      include: {
        organizer: {
          select: {
            nickname: true,
            profileUrl: true,
            shareScore: true,
          },
        },
        participants: {
          select: {
            user: {
              select: {
                profileUrl: true,
              },
            },
          },
        },
        // groupBuyImages: {
        //     where: {

        //     }
        // }
      },
    });

    if (!groupBuy) return null;

    const participantProfileUrls = groupBuy.participants.map(
      (p) => p.user.profileUrl ?? "",
    );

    return new GetGroupBuyDetailDto(
      groupBuy.id,
      groupBuy.title,
      groupBuy.description,
      groupBuy.organizer.nickname,
      groupBuy.organizer.profileUrl ?? "",
      groupBuy.organizer.shareScore,
      participantProfileUrls,
      groupBuy.capacity,
      participantProfileUrls.length,
      groupBuy.meetingDate,
      groupBuy.locationNote,
      groupBuy.lat,
      groupBuy.lng,
      groupBuy.desiredItem,
    );
  }
}
