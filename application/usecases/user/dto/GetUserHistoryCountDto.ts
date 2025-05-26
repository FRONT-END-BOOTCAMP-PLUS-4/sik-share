import type { participantsType, StatusType } from "@/types/types";

export class GetUserHistoryCountDto {
  constructor(
    public publicId: number,
    public type: "share" | "group-buy" | "participation",
    public tabType: "status" | "participation",
  ) {}
}
