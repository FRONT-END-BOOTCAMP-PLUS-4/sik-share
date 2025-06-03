"use client";

import { useRouter } from "next/navigation";
import { UsersRound } from "lucide-react";
import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/ko";

interface ChatListProps {
  chatId: string;
  type: "share" | "together";
  imageUrl?: string[];
  groupBuyTitle?: string;
  title?: string;
  nickname?: string;
  totalPeople?: number;
  temperature?: number;
  lastMessageAt: string | null;
  lastMessage: string | null;
  unreadCount: number;
  participantCount: number;
  thumbnailUrl?: string;
}

export default function ChatList({
  chatId,
  type,
  imageUrl,
  groupBuyTitle,
  nickname,
  temperature,
  lastMessageAt,
  lastMessage,
  unreadCount,
  participantCount,
  thumbnailUrl,
}: ChatListProps) {
  const router = useRouter();

  const handleClick = () => {
    const path =
      type === "share" ? `/chat/${chatId}/shares` : `/chat/${chatId}/together`;
    router.push(path);
  };

  function getImageUrl(img: string | string[] | undefined | null) {
    if (Array.isArray(img)) {
      return img[0] ?? "";
    }
    if (typeof img === "string") {
      return img;
    }
    return "";
  }

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleClick}
      className="cursor-pointer w-full h-[71px] p-4 flex justify-between items-center border-b hover:bg-zinc-50 transition"
    >
      <div className="flex items-center gap-2">
        <div className="relative w-[40px] h-[40px]">
          <Image
            src={
              getImageUrl(imageUrl)?.startsWith("http")
                ? getImageUrl(imageUrl)
                : "/assets/images/example/thumbnail.png"
            }
            width={40}
            height={40}
            className="w-[40px] h-[40px] border border-zinc-100 rounded-full"
            alt="profile"
          />
          <Image
            src={thumbnailUrl || "/assets/images/example/thumbnail.png"}
            width={20}
            height={20}
            className="w-[20px] h-[20px] absolute right-0 bottom-0 w-4 h-4 rounded-[4px] border border-white shadow-md"
            alt="badge"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            {type === "together" && (
              <>
                <p className="body-md w-[180px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {groupBuyTitle}
                </p>
                <div className="flex flex-row gap-[2px]">
                  <UsersRound className="w-4 h-4 text-zinc-400" />
                  <p className="caption !text-zinc-400">{participantCount}</p>
                </div>
              </>
            )}
            {type === "share" && (
              <>
                <p className="body-md">{nickname}</p>
                <p className="badge-medium !text-zinc-400">{temperature}°C</p>
              </>
            )}
            <p className="label !text-zinc-400">
              {lastMessageAt?.trim()
                ? dayjs(lastMessageAt).locale("ko").format("A h:mm")
                : ""}
            </p>
          </div>
          <p className="caption !text-zinc-500">{lastMessage}</p>
        </div>
      </div>
      {unreadCount > 0 && (
        <div className="self-start flex justify-center items-center w-[20px] h-[20px] bg-[#B5D430] rounded-full">
          <p className="label !text-[var(--light-green-50)]">{unreadCount}</p>
        </div>
      )}
    </div>
  );
}
