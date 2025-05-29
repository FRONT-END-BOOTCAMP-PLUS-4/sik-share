import { Badge } from "@/components/ui/badge";

type BadgeVariant = React.ComponentProps<typeof Badge>["variant"];

interface BadgeInfo {
  key: string;
  label: string;
  variant: BadgeVariant;
}

interface GroupBadgesProps {
  type: string;
  isDday?: number;
  status: number;
  remainingHours?: number;
  meetingDate?: string;
}

export function GroupBadges({
  type,
  isDday,
  status,
  remainingHours,
  meetingDate,
}: GroupBadgesProps) {
  const today = new Date().toLocaleDateString();

  const badges: BadgeInfo[] = [
    typeof isDday === "number" &&
      isDday !== undefined &&
      isDday >= 0 &&
      status === 0 && {
        key: "dday",
        label: `D-${isDday}`,
        variant: "isDday",
      },
    type === "groupbuy" &&
      isDday !== undefined &&
      isDday <= 1 &&
      status === 0 &&
      meetingDate !== undefined &&
      today <= meetingDate && {
        key: "closing",
        label: "마감 임박",
        variant: "warning",
      },
    type === "groupbuy" &&
      status === 0 &&
      meetingDate !== undefined &&
      today > meetingDate && {
        key: "end",
        label: "기한 마감",
        variant: "done",
      },
    type === "groupbuy" &&
      status === 1 && {
        key: "done",
        label: "완료",
        variant: "done",
      },
    type === "share" &&
      status === 0 &&
      remainingHours !== 0 && {
        key: "ongoing",
        label: "진행 중",
        variant: "isDday",
      },
    type === "share" &&
      status === 0 &&
      remainingHours === 0 && {
        key: "end",
        label: "기한 마감",
        variant: "done",
      },
    type === "share" &&
      status === 1 && {
        key: "reserved",
        label: "예약 중",
        variant: "default",
      },
    type === "share" &&
      status === 2 && {
        key: "done",
        label: "나눔 완료",
        variant: "done",
      },
  ].filter(Boolean) as BadgeInfo[];

  return (
    <div className="flex gap-1 mb-2">
      {badges.map(({ key, label, variant }) => (
        <Badge key={key} variant={variant}>
          {label}
        </Badge>
      ))}
    </div>
  );
}
