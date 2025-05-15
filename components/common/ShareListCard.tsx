import Image from "next/image";
import { Clock, ClockFading, MapPin, CircleUserRound } from "lucide-react";
import {
  Badge,
  type VariantProps as BadgeVariantProps,
} from "@/components/ui/badge";

export interface ShareListCardProps {
  id: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  title: string;
  badgeVariant?: BadgeVariantProps<typeof Badge>["variant"];
  badgeLabel?: string;
  timeLeft?: string;
  location: string;
}

export function ShareListCard({
  thumbnailSrc,
  thumbnailAlt = "썸네일",
  title,
  badgeVariant,
  badgeLabel,
  timeLeft,
  location,
}: ShareListCardProps) {
  return (
    <div className="w-full flex gap-2 items-start px-4 py-3 cursor-pointer  border-b-1 border-b-zinc-200 hover:bg-zinc-200 hover:border-b-transparents">
      <div className="flex-shrink-0">
        <Image src={thumbnailSrc} width={78} height={78} alt={thumbnailAlt} />
      </div>
      <div className="flex flex-col flex-1 gap-1">
        <div className="flex justify-between items-center">
          <p className="body-md truncate max-w-[230px]">{title}</p>
          {badgeVariant && badgeLabel && (
            <Badge variant={badgeVariant}>{badgeLabel}</Badge>
          )}
        </div>
        <div className="flex flex-col gap-1 text-zinc-500">
          <div className="flex gap-[5px]">
            {timeLeft && (
              <div className="flex flex-1/2 items-center gap-1">
                <ClockFading size={16} strokeWidth={1} />
                <p className="caption">
                  <span className="text-(--warning)">{timeLeft}</span>
                  시간 남음
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={16} strokeWidth={1} />
            <p className="caption">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
