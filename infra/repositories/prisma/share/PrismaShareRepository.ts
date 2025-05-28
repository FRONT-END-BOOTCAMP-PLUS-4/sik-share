import type {
  GetUserShares,
  ShareRepository,
} from "@/domain/repositories/share/ShareRepository";
import type { GetShareDetailDto } from "@/application/usecases/share/dto/GetShareDetailDto";
import { type Prisma, PrismaClient, type Share } from "@/prisma/generated";

export class PrismaShareRepository implements ShareRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async save(share: Share): Promise<Share> {
    return await this.prisma.share.create({
      data: share,
    });
  }

  async getUserShares({
    where,
    offset,
    itemsPerPage,
  }: GetUserShares): Promise<(Share & { thumbnailUrl: string | null })[]> {
    const shares = await this.prisma.share.findMany({
      where,
      skip: offset,
      take: itemsPerPage,
      orderBy: { createdAt: "desc" },
      include: {
        images: {
          where: { order: 0 },
          take: 1,
        },
      },
    });

    return shares.map((share) => ({
      ...share,
      thumbnailUrl: share.images?.[0]?.url ?? null,
    }));
  }

  async getCount(where: Prisma.ShareWhereInput): Promise<number> {
    return await this.prisma.share.count({ where });
  }

  async findById(id: number) : Promise<Share | null>{
    return await this.prisma.share.findUnique({
      where: {id}
    })
  }

  async getDetail(id: number): Promise<Partial<GetShareDetailDto> | null> {
    const share = await this.prisma.share.findUnique({
      where: { id },
      include: {
        owner: {
          select: {
            id: true,
            nickname: true,
            profileUrl: true,
            shareScore: true,
          },
        },
        images: {
          orderBy: { order: "asc" },
          select: {
            url: true,
          },
        },
        shareItem: {
          select: {
            name: true
          }
        },
        neighborhood: {
          select: {
            name: true
          }
        }
      },
    });
  
    if (!share) return null;

    const now = new Date();
    const expireTime = new Date(share.createdAt.getTime() + 24 * 60 * 60 * 1000);
    const remainingMs = expireTime.getTime() - now.getTime();
    const remainingHours = Math.max(0, Math.floor(remainingMs / (1000 * 60 * 60)));
  
    return {
      id: share.id,
      title: share.title,
      desc: share.description,
      organizerId: share.owner.id,
      organizerNickname: share.owner.nickname,
      organizerProfileUrl: share.owner.profileUrl ?? "",
      organizerShareScore: share.owner.shareScore,
      createdAt: share.createdAt,
      locationNote: share.locationNote,
      lat: share.lat,
      lng: share.lng,
      desiredItemName: share.shareItem?.name ?? null,
      imageUrls: share.images.map((img) => img.url),
      neighborhoodName: share.neighborhood?.name ?? null,
      remainingHours
    };
  }

  async getList(
    offset: number,
    limit: number,
    neighborhoodId: number
  ): Promise<(Partial<Share> & { thumbnailUrl: string | null })[]> {
    const shares = await this.prisma.share.findMany({
      where: { neighborhoodId },
      orderBy: { createdAt: "desc" },
      skip: offset,
      take: limit,
      select: {
        id: true,
        title: true,
        neighborhoodId: true,
        locationNote: true,
        createdAt: true,
        images: {
          where: { order: 0 },
          select: { url: true },
        },
      },
    });

    return shares.map((share) => ({
      ...share,
      thumbnailUrl: share.images[0]?.url ?? null,
    }));

  }
  async update(share: Partial<Share>) : Promise<Share> {
    return await this.prisma.share.update({data: share, where: {id: share.id as number}});
  }
}