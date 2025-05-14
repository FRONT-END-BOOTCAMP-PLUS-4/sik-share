import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function UserLocation() {
  return (
    <Badge variant="locate">
      <MapPin size={14} strokeWidth={2} />
      낙성대동
    </Badge>
  );
}
