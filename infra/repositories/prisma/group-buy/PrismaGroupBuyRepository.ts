import type {
  GetUserGroupbuys,
  GroupBuyRepository,
} from "@/domain/repositories/group-buy/GroupBuyRepository";
import type { GetGroupBuyDetailDto } from "@/application/usecases/group-buy/dto/GetGroupBuyDetailDto";
import { type GroupBuy, type Prisma, PrismaClient } from "@/prisma/generated";

export class PrismaGroupBuyRepository implements GroupBuyRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async save(groupBuy: GroupBuy): Promise<GroupBuy> {
    return await this.prisma.groupBuy.create({
      data: groupBuy,
    });
  }

  async getUserGroupbuys({
    where,
    offset,
    itemsPerPage,
  }: GetUserGroupbuys): Promise<
    (GroupBuy & { participants: number; thumbnailUrl: string })[]
  > {
    const groupBuys = await this.prisma.groupBuy.findMany({
      where,
      skip: offset,
      take: itemsPerPage,
      orderBy: { createdAt: "desc" },
      include: {
        images: {
          where: { order: 0 },
          take: 1,
        },
        participants: true,
      },
    });

    return groupBuys.map((groupBuy) => ({
      ...groupBuy,
      participants: groupBuy.participants.length,
      thumbnailUrl:
        groupBuy.images?.[0]?.url ??
        "/assets/images/example/default-group-buys-thumbnail.png",
    }));
  }

  async getCount(where: Prisma.GroupBuyWhereInput): Promise<number> {
    return await this.prisma.groupBuy.count({ where });
  }

  async getDetail(id: number): Promise<Partial<GetGroupBuyDetailDto> | null> {
  const groupBuy = await this.prisma.groupBuy.findUnique({
    where: { id },
    include: {
      organizer: {
        select: {
          id: true,
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
      images: {
        orderBy: { order: "asc" },
        select: {
          url: true,
        },
      },
    },
  });

  if (!groupBuy) return null;

  const participantProfileUrls = groupBuy.participants.map(
    (p) => p.user.profileUrl ?? ""
  );

  return {
    id: groupBuy.id,
    title: groupBuy.title,
    desc: groupBuy.description,
    organizerId: groupBuy.organizer.id,
    organizerNickname: groupBuy.organizer.nickname,
    organizerProfileUrl: groupBuy.organizer.profileUrl ?? "",
    organizerShareScore: groupBuy.organizer.shareScore,
    participantProfileUrls,
    capacity: groupBuy.capacity,
    currentParticipantCount: participantProfileUrls.length,
    meetingDate: groupBuy.meetingDate,
    locationNote: groupBuy.locationNote,
    lat: groupBuy.lat,
    lng: groupBuy.lng,
    desiredItem: groupBuy.desiredItem,
    imageUrls: groupBuy.images.map((img) => img.url),
  };
}
}
