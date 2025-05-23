import Image from "next/image";
import { Clock, ClockFading, MapPin, CircleUserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface ListCardProps {
  id: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  title: string;
  type: "share" | "groupbuy";
  badgeLabel?: string;
  timeLeft?: string;
  location: string;
  currentUser?: number;
  maxUser?: number;
}

export function ListCard({
  thumbnailSrc,
  thumbnailAlt = "썸네일",
  title,
  type,
  badgeLabel,
  timeLeft,
  location,
  currentUser,
  maxUser,
}: ListCardProps) {
  const resolvedBadgeLabel =
    badgeLabel || (type === "share" ? "나눔" : "같이 장보기");

  return (
    <div className="w-full flex gap-2 items-start px-4 py-3 cursor-pointer border-b border-b-zinc-200 hover:bg-zinc-200 hover:border-b-transparent">
      {/* 썸네일 이미지 */}
      <div className="flex-shrink-0">
        <Image
          src={thumbnailSrc}
          width={78}
          height={78}
          alt={thumbnailAlt}
          className="rounded-md object-fill !h-[78px]"
        />
      </div>

      {/* 본문 */}
      <div className="flex flex-col flex-1 gap-1">
        {/* 제목 + 뱃지 */}
        <div className="flex justify-between items-center">
          <p className="body-md truncate max-w-[230px]">{title}</p>
          <Badge variant={type}>{resolvedBadgeLabel}</Badge>
        </div>

        {/* 정보 (시간, 인원, 위치) */}
        <div className="flex flex-col gap-1 text-zinc-500">
          <div className="flex gap-[5px]">
            {/* 남은 시간 */}
            {timeLeft && (
              <div className="flex flex-1/2 items-center gap-1">
                {type === "share" ? (
                  <>
                    <ClockFading size={16} strokeWidth={1} />
                    <p className="caption">
                      <span className="text-[var(--warning)]">{timeLeft}</span>
                      시간 남음
                    </p>
                  </>
                ) : (
                  <>
                    <Clock size={16} strokeWidth={1} />
                    <p className="caption">{timeLeft}</p>
                  </>
                )}
              </div>
            )}

            {/* 참여 인원 */}
            {typeof currentUser === "number" && typeof maxUser === "number" && (
              <div className="flex flex-1/2 gap-1 items-center">
                <CircleUserRound size={16} strokeWidth={1} />
                <p className="caption">{`${currentUser}/${maxUser}명`}</p>
              </div>
            )}
          </div>

          {/* 위치 */}
          <div className="flex items-center gap-1">
            <MapPin size={16} strokeWidth={1} />
            <p className="caption">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
