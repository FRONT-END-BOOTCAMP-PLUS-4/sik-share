import type { ShareRepository } from "@/domain/repositories/share/ShareRepository";
import type { GetShareDetailDto } from "./dto/GetShareDetailDto";

export class GetShareDetailUsecase {
  constructor(private readonly shareRepo: ShareRepository) {}

  async execute(groupBuyId: number): Promise<GetShareDetailDto | null> {
    return await this.shareRepo.getDetail(groupBuyId);
  }
}
