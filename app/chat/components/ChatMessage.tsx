import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import Link from "next/link";

interface ChatMessageProps {
  type: "me" | "other" | "system";
  nickname?: string;
  imageUrl?: string;
  message: string;
  readCount?: number;
  time?: string;
  count?: number;
  senderId?: string;
  chatId?: string;
  shareId?: number;
}

export default function ChatMessage({
  type,
  nickname = "",
  imageUrl = "/assets/images/example/default-profile.png",
  message,
  readCount = 0,
  time = "",
  count,
  chatId,
  shareId,
  senderId,
}: ChatMessageProps) {
  const displayCount =
    typeof count === "number" && count > 0
      ? count
      : readCount > 0
        ? readCount
        : null;

  return (
    <>
      {type === "other" && (
        <div className="flex items-start gap-2 w-full max-w-[312px]">
          <Image
            width={36}
            height={36}
            alt="profile"
            src={imageUrl}
            className="w-[36px] h-[36px] object-fill rounded-full"
          />
          <div className="flex flex-col">
            <div className="body-sm mb-3">{nickname}</div>
            <div className="flex items-center gap-1">
              <div className="mb-1 bg-zinc-200 body-sm rounded-[25px] rounded-tl-none px-4 py-3 max-w-[220px] break-words">
                {message}
              </div>
              <div className="flex flex-col items-start justify-center">
                {displayCount !== null && (
                  <div className="label text-primary">{displayCount}</div>
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
                {displayCount !== null && (
                  <div className="label text-primary">{displayCount}</div>
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

      {type === "system" && (
        <div className="w-full flex justify-center py-6">
          <div className="flex flex-col justify-center items-center w-[250px] min-h-[100px] gap-2 py-6 ">
            <p className="caption text-zinc-500 mb-2 text-center">
              나눔이 완료되었다면, 후기 작성 어때요?
            </p>
            <Link
              href={`/review/${shareId}/new`}
              className="badge-bold text-secondary underline text-[16px] font-bold cursor-pointer"
            >
              후기 작성 바로가기
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
