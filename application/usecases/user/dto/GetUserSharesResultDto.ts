export class GetUserSharesResultDto {
  constructor(
    public id: number,
    public thumbnailSrc: string,
    public title: string,
    public location: string,
    public timeLeft?: number | undefined,
    public meetingDate?: string | undefined,
    public badgeVariant?: string | undefined,
    public badgeLabel?: string | undefined,
  ) {}
}
