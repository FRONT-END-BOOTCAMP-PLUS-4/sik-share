import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface TogetherInfoProps {
  chatId: string;
  title: string;
  imageUrl?: string;
  meetingDate?: string;
  locationNote?: string;
  status: number;
}

export default function TogetherInfo({
  chatId,
  title,
  imageUrl,
  meetingDate,
  locationNote,
  status: initialStatus,
}: TogetherInfoProps) {
  const [status, setStatus] = useState<number>(initialStatus);
  const [open, setOpen] = useState(false);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
  };

  const completeTogether = async (chatId: string) => {
    const res = await fetch(`/api/chat/${chatId}/together/complete`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chatId }),
    });
    if (!res.ok) throw new Error("함께 장보기 완료 처리 실패");
    return await res.json();
  };

  const handleTogetherComplete = async () => {
    try {
      await completeTogether(chatId);
      setStatus(2);
      setOpen(false);
    } catch (e) {
      console.error("나눔 완료 처리 실패:", e);
    }
  };

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
      <div className="self-center">
        {status === 2 ? (
          // status가 2면 "장보기 완료" 뱃지/텍스트만 보여줌
          <Badge
            variant="reserve"
            className="self-center text-white w-fit h-fit bold ml-auto px-3 py-2"
          >
            장보기 완료
          </Badge>
        ) : (
          <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
              <Badge
                variant="shareComplete"
                className="self-center text-white w-fit h-fit bold ml-auto cursor-pointer"
              >
                완료하기
              </Badge>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="!text-center">
                <DialogTitle className="body-md font-bold">
                  장보기가 완료 되었나요?
                </DialogTitle>
                <DialogDescription className="body-sm text-zinc-400">
                  완료 처리하면 작성글에도 반영돼요
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button
                  className="w-full body-md"
                  size="full"
                  variant="default"
                  onClick={handleTogetherComplete}
                >
                  완료 하기
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
