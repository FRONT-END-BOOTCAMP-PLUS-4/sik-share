import { UsersRound } from "lucide-react";
import Image from "next/image";

interface ChatListProps {
  type: "share" | "together";
  profileImage?: string;
  title?: string;
  nickname?: string;
  totalPeople?: number;
  temperature?: number;
  lastChatTime: string;
  chatMessage: string;
  chatCount: number;
}

export default function ChatList({
  type,
  profileImage,
  title,
  nickname,
  totalPeople,
  temperature,
  lastChatTime,
  chatMessage,
  chatCount,
}: ChatListProps) {
  return (
    <div className="w-full h-[71px] p-4 flex justify-between items-center border-b">
      <div className="flex items-center gap-2">
        <Image
          width={40}
          height={40}
          src={profileImage ?? "/assets/images/example/thumbnail.png"}
          className="rounded-full"
          alt="profile"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            {type === "together" && (
              <>
                <p className="body-md">{title}</p>
                <div className="flex flex-row gap-[2px]">
                  <UsersRound className="w-4 h-4 text-zinc-400" />
                  <p className="caption !text-zinc-400">{totalPeople}</p>
                </div>
              </>
            )}
            {type === "share" && (
              <>
                <p className="body-md">{nickname}</p>
                <p className="badge-medium !text-zinc-400">{temperature}°C</p>
              </>
            )}

            <p className="label !text-zinc-400">{lastChatTime}</p>
          </div>
          <p className="caption !text-zinc-500">{chatMessage}</p>
        </div>
      </div>
      {chatCount > 0 && (
        <div className="self-start flex justify-center items-center w-[20px] h-[20px] bg-[#B5D430] rounded-full">
          <p className="label !text-[var(--light-green-50)]">{chatCount}</p>
        </div>
      )}
    </div>
  );
}
