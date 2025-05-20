import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { UsersRound } from "lucide-react";

interface ChatHeaderProps {
  type: "share" | "together";
  otherUser: {
    nickname: string;
    imageUrl: string;
    temperature: number;
  };
}

export default function ChatHeader({ type, otherUser }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <Link href="/chat">
        <X />
      </Link>
      {type === "share" && (
        <div className="flex items-center gap-2">
          <Image
            src={otherUser.imageUrl ?? "/assets/images/example/thumbnail.png"}
            width={38}
            height={38}
            alt="profile"
            className="rounded-full"
          />
          <div className="flex flex-col justify-center items-start h-[38px]">
            <span className="body-md">{otherUser.nickname}</span>
            <span className="badge-medium text-primary">
              {otherUser.temperature}°C
            </span>
          </div>
        </div>
      )}
      {type === "together" && (
        <div className="flex items-center gap-2">
          <div className="flex flex-col justify-center items-center h-[38px]">
            <span className="body-md">오늘 저녁 장 같이 보실 분? 구합니다</span>
            <div className="flex items-center gap-[2px]">
              <UsersRound className="w-4 h-4" />
              <span className="badge-medium">3</span>
            </div>
          </div>
        </div>
      )}
      <div />
    </div>
  );
}
