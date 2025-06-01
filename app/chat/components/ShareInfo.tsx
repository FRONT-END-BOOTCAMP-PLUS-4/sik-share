import { useState } from "react";
import Image from "next/image";
import { InfoIcon, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { ReserveDatePicker } from "./ReserveDatePicker";
import { Badge } from "@/components/ui/badge";

interface ShareInfoProps {
  chatId: string;
  info: {
    title: string;
    locationNote: string;
    imageUrl: string;
    meetingDate?: string;
    status: number;
  };
  onMeetingDateChange?: (date: Date) => void;
}

export default function ShareInfo({
  info,
  chatId,
  onMeetingDateChange,
}: ShareInfoProps) {
  const [date, setDate] = useState<Date | undefined>();
  const [open, setOpen] = useState(false);

  const [status, setStatus] = useState<number>(info.status);
  const [reservedDate, setReservedDate] = useState<Date | null>(
    info.meetingDate ? new Date(info.meetingDate) : null,
  );

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) setDate(undefined);
    setOpen(nextOpen);
  };

  const updateMeetingDate = async (chatId: string, meetingDate: Date) => {
    const res = await fetch(`/api/chat/${chatId}/shares/confirm`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ meetingDate }),
    });
    if (!res.ok) throw new Error("날짜 업데이트 실패");
    return await res.json();
  };

  const completeShare = async (chatId: string) => {
    const res = await fetch(`/api/chat/${chatId}/shares/complete`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chatId }),
    });
    if (!res.ok) throw new Error("나눔 완료 처리 실패");
    return await res.json();
  };

  const handleComplete = async () => {
    if (date) {
      try {
        await updateMeetingDate(chatId, date);
        setReservedDate(date);
        setStatus(1);
        setOpen(false);
        onMeetingDateChange?.(date);
      } catch (e) {}
    }
  };

  const handleShareComplete = async () => {
    try {
      await completeShare(chatId);
      setStatus(2);
      setOpen(false);
    } catch (e) {}
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  let actionButton = null;
  if (status === 0) {
    actionButton = (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button size="sm" className="ml-auto">
            예약하기
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="body-sm">만남 날짜</DialogTitle>
            <DialogDescription>
              <ReserveDatePicker value={date} onChange={setDate} />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              className="w-full body-md"
              size="full"
              variant={date ? "default" : "disabled"}
              onClick={handleComplete}
              disabled={!date}
            >
              날짜 선택 완료
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  } else if (status === 1) {
    actionButton = (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Badge
            variant="shareComplete"
            className="text-white w-fit h-fit bold ml-auto cursor-pointer"
          >
            나눔 완료하기
          </Badge>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="!text-center">
            <DialogTitle className="body-md font-bold">
              나눔이 완료 되었나요?
            </DialogTitle>
            <DialogDescription className="body-sm text-zinc-400">
              완료 처리하면 나눔글에도 반영돼요
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              className="w-full body-md font-bold"
              onClick={handleShareComplete}
            >
              완료하기
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  } else if (status === 2) {
    actionButton = (
      <Badge
        variant="shareComplete"
        className="text-white w-fit h-fit bold ml-auto bg-zinc-400"
      >
        나눔완료
      </Badge>
    );
  }

  return (
    <div className="flex flex-col gap-3 px-4 py-2 border-b">
      <div className="flex w-full items-center gap-2">
        <Image
          src={info.imageUrl || "/assets/images/example/thumbnail.png"}
          width={48}
          height={48}
          className="rounded-sm"
          alt="shareImage"
        />
        <div className="flex flex-col flex-1 min-w-0">
          <p className="body-md truncate">{info.title}</p>
          <div className="flex flex-row text-caption gap-[2px]">
            <MapPin className="w-4 h-4" />
            <p className="text-xs text-zinc-500 truncate">
              {info.locationNote}
            </p>
          </div>
        </div>
        {actionButton}
      </div>
      {reservedDate && (
        <Badge variant="reserve" className="text-white flex items-center gap-2">
          <InfoIcon />
          <p>{formatDate(reservedDate)}</p>
        </Badge>
      )}
    </div>
  );
}
