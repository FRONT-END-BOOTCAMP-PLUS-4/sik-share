import type { ShareRepository } from "@/domain/repositories/share/ShareRepository";

export class DeleteShareUsecase {
  constructor(private shareRepo: ShareRepository) {}

  async execute(shareId: number) {
    await this.shareRepo.softDelete(shareId);
  }
}
