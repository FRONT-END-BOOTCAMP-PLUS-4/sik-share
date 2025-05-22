import Image from "next/image";
import { MapPin, Clock } from "lucide-react";

interface TogetherInfoProps {
  title: string;
  imageUrl?: string;
  meetingDate?: string;
  locationNote?: string;
}

export default function TogetherInfo({
  title,
  imageUrl,
  meetingDate,
  locationNote,
}: TogetherInfoProps) {
  return (
    <div className="flex items-start gap-3 px-4 py-2 border-b">
      <div className="flex-shrink-0">
        <Image
          src={imageUrl ?? "/assets/images/example/thumbnail.png"}
          width={64}
          height={64}
          alt="장보기 이미지"
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col self-center">
        <p className="badge-md">{title}</p>
        <div className="flex items-center caption text-zinc-500 gap-5">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>
              {meetingDate
                ? new Date(meetingDate).toLocaleString("ko-KR", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })
                : "미정"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{locationNote ?? "장소 미정"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
