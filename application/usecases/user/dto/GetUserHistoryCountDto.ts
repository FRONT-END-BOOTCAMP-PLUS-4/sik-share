export class GetUserHistoryCountDto {
  constructor(
    public publicId: number,
    public type: "share" | "group-buy" | "participation" | "review",
    public tabType: "status" | "participation" | "review",
  ) {}
}
