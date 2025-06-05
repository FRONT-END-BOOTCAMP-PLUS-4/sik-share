import { Handshake, ClockAlert, SmilePlus, ShoppingCart } from "lucide-react";

interface NotiTabListProps {
  type: "share" | "end" | "review" | "together";
  time: number;
  nickname: string;
  title: string;
}

export default function NotiTabList({
  type,
  time,
  nickname,
  title,
}: NotiTabListProps) {
  return (
    <div className="px-4 py-5 border w-full h-[110px]">
      <div className="flex flex-col">
        <div className="flex items-center flex-row justify-between">
          {type === "share" && (
            <div className="flex flex-row gap-2 text-primary">
              <Handshake />
              <p className="badge-bold">나눔 신청</p>
            </div>
          )}
          {type === "end" && (
            <div className="flex flex-row gap-2 text-(--warning)">
              <ClockAlert />
              <p className="badge-bold">나눔 기한 만료</p>
            </div>
          )}
          {type === "review" && (
            <div className="flex flex-row gap-2 text-(--orange)">
              <SmilePlus />
              <p className="badge-bold">같이 장보기 신청</p>
            </div>
          )}

          {type === "together" && (
            <div className="flex flex-row gap-2 text-(--secondary)">
              <ShoppingCart />
              <p className="badge-bold">나눔 후기</p>
            </div>
          )}
          <p className="text-zinc-400 badge-bold">{time}시간 전</p>
        </div>

        {type === "share" && (
          <div className="body-md !font-bold pl-8 w-full h-auto break-words">
            {nickname} 님으로부터 “{title}” 나눔 신청이 왔어요
          </div>
        )}
        {type === "end" && (
          <div className="body-md !font-bold pl-8 w-full h-auto break-words">
            나눔글이 만료되었어요!
          </div>
        )}
        {type === "review" && (
          <div className="body-md !font-bold pl-8 w-full h-auto break-words">
            {nickname} 님이 보낸 “{title}” 나눔 후기가 도착했어요
          </div>
        )}
        {type === "together" && (
          <div className="body-md !font-bold pl-8 w-full h-auto break-words">
            {nickname} 님이 “{title}” 같이 장보기에 참여했어요
          </div>
        )}
      </div>
    </div>
  );
}
