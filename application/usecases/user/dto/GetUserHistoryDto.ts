import type { participantsType, StatusType } from "@/types/types";

export class GetUserHistoryDto {
  constructor(
    public publicId: number,
    public status: StatusType | participantsType,
    public page: number,
    public itemsPerPage: number,
  ) {}
}
