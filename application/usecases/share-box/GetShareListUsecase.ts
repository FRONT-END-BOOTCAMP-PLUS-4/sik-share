import type { ShareListRepository } from "@/domain/repositories/share-box/ShareListRepository";
import type { UserRepository } from "@/domain/repositories/share-box/UserRepository";
import { GetShareListDto } from "@/application/usecases/share-box/dto/GetShareListDto";
import type { ShareWithRelations } from "@/domain/repositories/share-box/ShareListRepository";

function calcRemainingHours(createdAt: Date | null | undefined): number {
  if (!createdAt) return 0;
  const created = new Date(createdAt).getTime();
  const expire = created + 24 * 60 * 60 * 1000;
  const now = Date.now();
  const diff = expire - now;
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60)));
}

export class GetShareListUsecase {
  constructor(
    private userRepository: UserRepository,
    private shareListRepository: ShareListRepository
  ) {}

  async execute(publicId: number): Promise<GetShareListDto[]> {
    const user = await this.userRepository.findByPublicId(publicId);
    if (!user) throw new Error("유저를 찾을 수 없습니다.");

    const shares = await this.shareListRepository.findById(user.id);

    try {
        return shares.map((share: ShareWithRelations) => new GetShareListDto(
        share.id,
        share.title,
        share.description,
        share.ownerId,
        share.owner?.nickname ?? "",
        share.owner?.profileUrl ?? "",
        share.owner?.shareScore ?? 0,
        share.createdAt,
        share.locationNote,
        share.lat,
        share.lng,
        share.shareItem?.name ?? "",
        share.images?.map((img) => img.url) ?? [],
        share.neighborhood?.name ?? "",
        calcRemainingHours(share.createdAt),
        share.status
      ));
    }
    catch (e) {
    }
  }
}
