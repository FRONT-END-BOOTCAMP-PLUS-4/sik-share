import type { ShareItemRepository } from "@/domain/repositories/share/ShareItemRepository";

export class GetShareItemUsecase {
  constructor(private shareItemRepo: ShareItemRepository){}

  async execute(){
    return await this.shareItemRepo.findAll();
  }
}
