import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/ko";

interface ChatMessageProps {
  type: "me" | "other";
  nickname?: string;
  imageUrl?: string;
  message: string;
  readCount?: number;
  time?: string;
}

export default function ChatMessage({
  type,
  nickname = "",
  imageUrl = "/assets/images/example/default-profile.png",
  message,
  readCount = 0,
  time = "",
}: ChatMessageProps) {
  return (
    <>
      {type === "other" && (
        <div className="flex items-start gap-2 w-full max-w-[312px]">
          <Image
            width={36}
            height={36}
            alt="profile"
            src={imageUrl}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <div className="body-sm mb-3">{nickname}</div>
            <div className="flex items-center gap-1">
              <div className="mb-1 bg-zinc-200 body-sm rounded-[25px] rounded-tl-none px-4 py-3 max-w-[220px] break-words">
                {message}
              </div>
              <div className="flex flex-col items-start justify-center">
                {readCount > 0 && (
                  <div className="label text-primary">{readCount}</div>
                )}
                <div className="label self-end mb-1">
                  {time.trim() ? dayjs(time).locale("ko").format("A h:mm") : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {type === "me" && (
        <div className="flex justify-end items-start w-full">
          <div className="flex flex-col items-end">
            <div className="flex items-end gap-1">
              <div className="flex flex-col items-end justify-center">
                {readCount > 0 && (
                  <div className="label text-primary">{readCount}</div>
                )}
                <div className="label mb-1">
                  {time.trim() ? dayjs(time).locale("ko").format("A h:mm") : ""}
                </div>
              </div>
              <div className="mb-1 bg-blue-200 body-sm rounded-[25px] rounded-tr-none px-4 py-3 max-w-[220px] break-words">
                {message}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
