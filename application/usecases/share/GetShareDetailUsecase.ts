import type { ShareRepository } from "@/domain/repositories/share/ShareRepository";
import type { GetShareDetailDto } from "./dto/GetShareDetailDto";

export class GetShareDetailUsecase {
  constructor(private readonly shareRepo: ShareRepository) {}

  async execute(shareId: number): Promise<GetShareDetailDto | null> {
    const detail = await this.shareRepo.getDetail(shareId);

    if (
      detail &&
      typeof detail.id === "number" &&
      typeof detail.title === "string" &&
      typeof detail.desc === "string"
    ) {
      return detail as GetShareDetailDto;
    }
    return null;
  }
}
