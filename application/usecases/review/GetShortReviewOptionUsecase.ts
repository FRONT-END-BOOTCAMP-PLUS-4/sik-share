import type { ShortReviewOptionRepository } from "@/domain/repositories/review/ShortReviewOptionRepository";

export class GetShortReviewOptionUsecase {
  constructor(private shortReviewOptionRepo: ShortReviewOptionRepository) {}

  async execute() {
    return await this.shortReviewOptionRepo.findAll();
  }
}
