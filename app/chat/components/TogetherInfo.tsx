import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";
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
  imageUrl?: string[];
  meetingDate?: string;
  locationNote?: string;
  status: number;
  deletedAt?: Date | null;
}

export default function TogetherInfo({
  chatId,
  title,
  imageUrl,
  meetingDate,
  locationNote,
  status: initialStatus,
  deletedAt,
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
    } catch (e) {}
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

  if (deletedAt) {
    return (
      <div className="flex h-[99px] items-start gap-3 px-4 py-2 border-b opacity-30">
        <div className="flex-shrink-0">
          <Image
            src={
              getImageUrl(imageUrl)?.startsWith("http")
                ? getImageUrl(imageUrl)
                : "/assets/images/example/thumbnail.png"
            }
            width={64}
            height={64}
            alt="장보기 이미지"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center min-w-0 itmes-center">
          <div className="flex gap-2 text-center items-center">
            <p className="body-md">삭제됨</p>
            <p className="body-md truncate !font-light">{title}</p>
          </div>
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
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 px-4 py-2 border-b">
      <div className="flex-shrink-0">
        <Image
          src={
            getImageUrl(imageUrl)?.startsWith("http")
              ? getImageUrl(imageUrl)
              : "/assets/images/example/thumbnail.png"
          }
          width={64}
          height={64}
          alt="장보기 이미지"
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col flex-1 min-w-0 self-center">
        <p className="body-md truncate mb-[5px]">{title}</p>
        <div className="flex items-center caption text-zinc-500 gap-5">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>
              {meetingDate ? dayjs(meetingDate).format("YYYY-MM-DD") : "미정"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{locationNote ?? "장소 미정"}</span>
          </div>
        </div>
      </div>
      <div>
        {status === 2 ? (
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
