import type { ShareRepository } from "@/domain/repositories/share/ShareRepository";

export class GetShareCountUsecase {
  constructor(private shareRepo: ShareRepository) {}

  async execute(): Promise<number> {
    return this.shareRepo.countAll();
  }
}
