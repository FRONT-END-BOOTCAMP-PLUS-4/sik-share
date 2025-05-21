import type { ShareRepository } from "@/domain/repositories/ShareRepository";

interface GetShareListDTO {
  page: number;
  itemsPerPage: number;
  neighborhoodId: number;
}

export class GetShareListUsecase {
  constructor(private shareRepo: ShareRepository) {}

  async execute({ page, itemsPerPage, neighborhoodId }: GetShareListDTO) {
    const offset = page * itemsPerPage;
    return await this.shareRepo.getList(offset, itemsPerPage, neighborhoodId);
  }
}
