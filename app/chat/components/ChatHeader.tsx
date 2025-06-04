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
      {props.type === "together" && (
        <div className="flex flex-col items-center justify-center h-[38px] flex-1 min-w-0">
          <span className="body-md truncate text-center w-[227px] block">
            {props.title}
          </span>
          <div className="flex items-center justify-center gap-[2px]">
           <UsersRound className="w-4 h-4" strokeWidth={1} />
            <span className="label text-zinc-500">
              {props.participantCount}
            </span>
          </div>
        </div>
      )}
      <div />
    </div>
  );
}
