import { Badge } from "@/components/ui/badge";

export function GroupBadges() {
  return (
    <div className="flex gap-1 mb-2">
      <Badge variant="isDday">D-2</Badge>
      <Badge variant="warning">마감 임박</Badge>
    </div>
  );
}
