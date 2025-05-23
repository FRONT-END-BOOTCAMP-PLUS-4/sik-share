import type {
  Badge,
  VariantProps as BadgeVariantProps,
} from "@/components/ui/badge";

export class GetUserSharesResultDto {
  constructor(
    public id: number,
    // public thumbnailSrc: string,
    public title: string,
    public location: string,
    public timeLeft?: number | undefined,
    public meetingDate?: Date | undefined,
    public badgeVariant?: string | undefined,
    public badgeLabel?: string | undefined,
  ) {}
}
