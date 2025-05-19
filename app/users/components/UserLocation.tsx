import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface UserLocationProps {
  location: string;
}

export default function UserLocation({ location }: UserLocationProps) {
  return (
    <Badge variant="locate">
      <MapPin size={14} strokeWidth={2} />
      {location}
    </Badge>
  );
}
