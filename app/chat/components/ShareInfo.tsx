import Image from "next/image";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareInfoProps {
  info: {
    title: string;
    locationNote: string;
    imageUrl: string;
  };
}

export default function ShareInfo({ info }: ShareInfoProps) {
  console.log(info);
  return (
    <div className="flex flex-col justify-between items-start gap-3 px-4 py-2 border-b">
      <div className="flex gap-2">
        <Image
          src={info.imageUrl || "/assets/images/example/thumbnail.png"}
          width={48}
          height={48}
          className="rounded-sm"
          alt="shareImage"
        />
        <div className="flex-col flex-1">
          <p className="body-md">{info.title}</p>
          <div className="flex flex-row text-caption gap-[2px]">
            <MapPin className="w-4 h-4" />
            <p className="text-xs text-zinc-500">{info.locationNote}</p>
          </div>
        </div>
      </div>
      <Button size="sm">예약하기</Button>
    </div>
  );
}
