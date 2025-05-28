import { Badge } from "@/components/ui/badge";

interface GroupBadgesProps {
  isDday?: number;
}

export function GroupBadges({ isDday }: GroupBadgesProps) {
  return (
    <div className="flex gap-1 mb-2">
      {typeof isDday === "number" && isDday >= 0 && (
        <Badge variant="isDday">D-{isDday}</Badge>
      )}
      {isDday === 1 && <Badge variant="warning">마감 임박</Badge>}
    </div>
  );
}
