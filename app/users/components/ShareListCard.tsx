import Image from "next/image";
import { Clock, ClockFading, MapPin } from "lucide-react";
import {
  Badge,
  type VariantProps as BadgeVariantProps,
} from "@/components/ui/badge";

export interface ShareListCardProps {
  id: string;
  thumbnailSrc: string;
  title: string;
  location: string;
  badgeVariant?: BadgeVariantProps<typeof Badge>["variant"];
  badgeLabel?: string;
  timeLeft?: string;
  meetingDate?: string;
}

export function ShareListCard({
  thumbnailSrc,
  title,
  badgeVariant,
  badgeLabel,
  timeLeft,
  meetingDate,
  location,
}: ShareListCardProps) {
  return (
    <div className="w-full flex gap-2 items-start px-4 py-3 cursor-pointer  border-b-1 border-b-zinc-200 hover:bg-zinc-200 hover:border-b-transparents">
      <div className="flex-shrink-0">
        <Image
          className="rounded-sm w-[78px] h-[78px] object-cover"
          src={thumbnailSrc}
          width={78}
          height={78}
          alt={`${title} 썸네일 이미지`}
        />
      </div>
      <div className="flex flex-col flex-1 gap-1">
        <div className="flex justify-between items-center">
          <p className="body-md truncate max-w-[230px]">{title}</p>
          {badgeVariant && badgeLabel && (
            <Badge variant={badgeVariant}>{badgeLabel}</Badge>
          )}
        </div>
        <div className="flex flex-col gap-1 text-zinc-500">
          {timeLeft && (
            <div className="flex flex-1/2 items-center gap-1">
              <ClockFading size={16} strokeWidth={1} />
              <p className="caption">
                <span className="text-(--warning)">{timeLeft}</span>
                시간 남음
              </p>
            </div>
          )}
          {meetingDate && (
            <div className="flex flex-1/2 items-center gap-1">
              <Clock size={16} strokeWidth={1} />
              <p className="caption">{meetingDate}</p>
            </div>
          )}
          <div className="flex items-center gap-1">
            <MapPin size={16} strokeWidth={1} />
            <p className="caption">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
