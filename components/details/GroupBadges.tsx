import { Badge } from "@/components/ui/badge";
import { getGroupStatus, type GroupStatusParams } from "@/utils/groupStatus";

type BadgeVariant = React.ComponentProps<typeof Badge>["variant"];

interface BadgeInfo {
  key: string;
  label: string;
  variant: BadgeVariant;
}

interface GroupBadgesProps extends GroupStatusParams {}

export function GroupBadges(props: GroupBadgesProps) {
  const { isDday, status, type } = props;

  const badges: (BadgeInfo | false)[] = [
    typeof isDday === "number" &&
      isDday >= 0 &&
      status === 0 && {
        key: "dday",
        label: `D-${isDday}`,
        variant: "isDday",
      },
  ];

  const groupStatus = getGroupStatus(props);

  switch (groupStatus) {
    case "CLOSING":
      badges.push({
        key: "closing",
        label: "마감 임박",
        variant: "warning",
      });
      break;
    case "EXPIRED":
      badges.push({
        key: "expired",
        label: type === "groupbuy" ? "마감" : "기한 만료",
        variant: "done",
      });
      break;
    case "DONE":
      badges.push({
        key: "done",
        label: "장보기 완료",
        variant: "done",
      });
      break;
    case "SHARE_DONE":
      badges.push({
        key: "shareDone",
        label: "나눔 완료",
        variant: "done",
      });
      break;
    case "ONGOING":
      badges.push({
        key: "ongoing",
        label: "진행 중",
        variant: "isDday",
      });
      break;
    case "RESERVED":
      badges.push({
        key: "reserved",
        label: "예약 중",
        variant: "default",
      });
      break;
  }

  const validBadges = badges.filter(Boolean) as BadgeInfo[];

  return (
    <div className="flex gap-1 mb-2">
      {validBadges.map(({ key, label, variant }) => (
        <Badge key={key} variant={variant}>
          {label}
        </Badge>
      ))}
    </div>
  );
}
