import Image from "next/image";
import { MapPin, Clock } from "lucide-react";

export default function TogetherInfo() {
  return (
    <div className="flex items-start gap-3 px-4 py-2 border-b">
      <div className="flex-shrink-0">
        <Image
          src="/assets/images/example/thumbnail.png"
          width={64}
          height={64}
          alt="장보기 이미지"
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col self-center">
        <p className="badge-md">오늘 저녁 장 같이 보실 분? 구합니다</p>
        <div className="flex items-center caption text-zinc-500 gap-5">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>2025-05-18</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>낙성대 4출</span>
          </div>
        </div>
      </div>
    </div>
  );
}
