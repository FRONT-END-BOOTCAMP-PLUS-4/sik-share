import { Badge } from "@/components/ui/badge";

interface GroupBadgesProps {
  type: string;
  isDday?: number;
  status: number;
}

export function GroupBadges({ type, isDday, status }: GroupBadgesProps) {
  return (
    <div className="flex gap-1 mb-2">
      {typeof isDday === "number" && isDday >= 0 && (
        <Badge variant="isDday">D-{isDday}</Badge>
      )}

      {type === "groupbuy" && isDday === 1 && (
        <Badge variant="warning">마감 임박</Badge>
      )}

      {type === "share" && status === 0 && (
        <Badge variant="isDday">진행 중</Badge>
      )}

      {type === "share" && status === 1 && (
        <Badge variant="default">예약 중</Badge>
      )}

      {type === "share" && status === 2 && (
        <Badge variant="done">나눔 완료</Badge>
      )}
    </div>
  );
}
