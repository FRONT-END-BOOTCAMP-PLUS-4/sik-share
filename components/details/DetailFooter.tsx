"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ShareButton from "./ShareButton";
import { getGroupStatus } from "@/utils/groupStatus";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import DeleteDialog from "../common/DeleteDialog";

interface DetailFooterProps {
  isOwner: boolean;
  type: "share" | "groupbuy";
  isDday?: number;
  status?: number;
  remainingHours?: number;
  meetingDate?: string;
  memberCount?: number;
  maxMember?: number;
  postId?: number;
  userId?: string;
}

export function DetailFooter({
  isOwner,
  type,
  isDday,
  status,
  remainingHours,
  meetingDate,
  memberCount,
  maxMember,
  postId,
  userId,
}: DetailFooterProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const groupStatus = getGroupStatus({
    type,
    isDday,
    status: status ?? 0,
    remainingHours,
    meetingDate,
    memberCount,
    maxMember,
  });

  const isExpired =
    groupStatus === "EXPIRED" ||
    groupStatus === "DONE" ||
    groupStatus === "SHARE_DONE";

  const isFull = groupStatus === "FULL";

  const handleJoin = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          postId,
          type,
        }),
      });

      const data = await res.json();
      console.log(data);

      router.push(
        `/chat/${data.chatId}/${type === "share" ? "shares" : "together"}`,
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("참여 중 오류가 발생했습니다.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const pathname = usePathname();
  const segment = pathname.split("/");
  const pathId = segment[segment.length - 1];

  const handleModify = () => {
    router.push(`${pathname}/edit`);
  };

  return (
    <>
      <Dialog>
        <footer className="z-10 fixed bottom-0 mx-auto w-full max-w-[calc(var(--space-mobileMax)-2px)] bg-white flex justify-around items-center min-h-[var(--space-header)] px-4 py-2 shadow-[var(--bottom-nav-shadow)]">
          {!isOwner ? (
            isExpired ? (
              <Button variant="disabled" size="lg" className="w-[85%]" disabled>
                모집 종료
              </Button>
            ) : isFull ? (
              <Button variant="disabled" size="lg" className="w-[85%]" disabled>
                모집 완료
              </Button>
            ) : (
              <Button
                variant="joinFullBtn"
                size="lg"
                className="w-[85%]"
                onClick={handleJoin}
                disabled={isLoading}
              >
                {isLoading ? "참여 중..." : "채팅하기"}
              </Button>
            )
          ) : (
            <div className="flex justify-between w-[85%]">
              <Button
                variant="joinBtn"
                size="lg"
                className="w-[49%]"
                onClick={handleModify}
              >
                수정하기
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="!border-1 border-[var(--dark-green)] w-[49%] button-lg !text-[var(--dark-green)]"
                onClick={() => setIsDialogOpen(true)}
              >
                삭제하기
              </Button>
            </div>
          )}
          <DialogTrigger asChild>
            <div className="border-1 border-[var(--dark-green)] rounded-[8px] p-2 cursor-pointer">
              <Share2 size={24} />
            </div>
          </DialogTrigger>
        </footer>

        <DialogContent className="flex flex-col items-center">
          <DialogHeader>
            <DialogTitle>모임 공유하기</DialogTitle>
          </DialogHeader>
          <ShareButton />
        </DialogContent>
      </Dialog>
      <DeleteDialog
        id={Number(pathId)}
        type={type === "share" ? "share" : "group-buy"}
        isDialogOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onDelete={() => router.push("/map")}
      />
    </>
  );
}
