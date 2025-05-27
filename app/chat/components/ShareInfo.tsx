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
import { Toaster } from "@/components/ui/sonner";

interface ShareInfoProps {
  chatId: string;
  info: {
    title: string;
    locationNote: string;
    imageUrl: string;
    meetingDate?: string;
    status: number; // 0: 진행중, 1: 예약중, 2: 완료
  };
  onMeetingDateChange?: (date: Date) => void;
}

export default function ShareInfo({
  info,
  chatId,
  onMeetingDateChange,
}: ShareInfoProps) {
  // meetingDate는 서버에서 내려주는 걸 기준으로 함
  const [date, setDate] = useState<Date | undefined>();
  const [open, setOpen] = useState(false);

  // status를 state로 관리 (API 요청 후 최신값 set 필요)
  const [status, setStatus] = useState<number>(info.status);
  const [reservedDate, setReservedDate] = useState<Date | null>(
    info.meetingDate ? new Date(info.meetingDate) : null,
  );

  // 예약 Dialog 열고 닫기
  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) setDate(undefined);
    setOpen(nextOpen);
  };

  // 예약하기 (만남 날짜 확정)
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

  // 나눔 완료 처리
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

  // 날짜 확정 버튼
  const handleComplete = async () => {
    if (date) {
      try {
        await updateMeetingDate(chatId, date);
        setReservedDate(date);
        setStatus(1); // 예약중으로 변경
        setOpen(false);
        onMeetingDateChange?.(date);
        console.log("날짜 업데이트 성공:", date);
      } catch (e) {
        console.error("날짜 업데이트 실패:", e);
      }
    }
  };

  // 나눔 완료 버튼
  const handleShareComplete = async () => {
    try {
      await completeShare(chatId);
      setStatus(2); // 완료로 변경
      setOpen(false);
      console.log("나눔 완료 처리 성공");
    } catch (e) {
      console.error("나눔 완료 처리 실패:", e);
    }
  };

  // 날짜 포맷
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // 조건부 버튼/뱃지 렌더링
  let actionButton = null;
  if (status === 0) {
    // 진행중: 예약하기 버튼
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
    // 예약중: 나눔 완료하기 버튼
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
          <DialogHeader className="text-center">
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
    // 완료: 나눔완료 뱃지
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
