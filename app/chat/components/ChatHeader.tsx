import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { UsersRound } from "lucide-react";

interface ShareChatHeaderProps {
  type: "share";
  otherUser: {
    nickname: string;
    imageUrl: string;
    temperature: number;
  };
}

interface TogetherChatHeaderProps {
  type: "together";
  title: string;
  participantCount: number;
}

type ChatHeaderProps = ShareChatHeaderProps | TogetherChatHeaderProps;

export default function ChatHeader(props: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <Link href="/chat">
        <X />
      </Link>

      {/* 1:1 채팅 헤더 */}
      {props.type === "share" && (
        <div className="flex items-center gap-2">
          <Image
            src={
              props.otherUser.imageUrl ?? "/assets/images/example/thumbnail.png"
            }
            width={38}
            height={38}
            alt="profile"
            className="w-[40px] h-[40px] border-1 border-zinc-100 rounded-full"
          />
          <div className="flex flex-col justify-center items-start h-[38px]">
            <span className="body-md">{props.otherUser.nickname}</span>
            <span className="badge-medium text-primary">
              {props.otherUser.temperature}°C
            </span>
          </div>
        </div>
      )}

      {/* 단체 채팅 헤더 */}
      {props.type === "together" && (
        <div className="flex flex-col justify-center items-center h-[38px]">
          <span className="body-md">{props.title}</span>
          <div className="flex items-center gap-[2px]">
            <UsersRound className="w-4 h-4" />
            <span className="badge-medium">{props.participantCount}</span>
          </div>
        </div>
      )}
      <div />
    </div>
  );
}
