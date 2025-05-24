import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface UserLocationProps {
  location: string;
  isMyAccount: boolean;
}

export default function UserLocation({
  location,
  isMyAccount,
}: UserLocationProps) {
  const router = useRouter();
  const { data: session } = useSession();
  const publicId = session?.user.publicId;

  return (
    <Badge
      variant="locate"
      {...(isMyAccount && {
        className: "cursor-pointer",
        onClick: () => router.push(`/users/${publicId}/edit-address`),
      })}
    >
      <MapPin size={14} strokeWidth={2} />
      {location}
    </Badge>
  );
}
