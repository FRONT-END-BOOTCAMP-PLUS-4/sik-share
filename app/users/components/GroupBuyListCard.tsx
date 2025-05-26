import Image from "next/image";
import { CircleUserRound, Clock, MapPin } from "lucide-react";
import {
  Badge,
  type VariantProps as BadgeVariantProps,
} from "@/components/ui/badge";

export interface GroupBuyListCardProps {
  id: string;
  thumbnailSrc: string;
  title: string;
  location: string;
  badgeLabel?: string;
  meetingDate?: string;
  currentUsers?: number;
  maxUsers?: number;
}

export function GroupBuyListCard({
  thumbnailSrc,
  title,
  meetingDate,
  location,
  currentUsers,
  maxUsers,
  badgeLabel,
}: GroupBuyListCardProps) {
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
          {badgeLabel && <Badge variant="cart">{badgeLabel}</Badge>}
        </div>
        <div className="flex flex-col gap-1 text-zinc-500">
          <div className="flex gap-[5px]">
            <div className="flex flex-1/2 items-center gap-1">
              <Clock size={16} strokeWidth={1} />
              <p className="caption">{meetingDate}</p>
            </div>
            <div className="flex flex-1/2 items-center gap-1">
              <CircleUserRound size={16} strokeWidth={1} />
              <p className="caption">
                {currentUsers}/{maxUsers} 명
              </p>
            </div>
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
