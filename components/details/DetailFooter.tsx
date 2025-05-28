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

interface DetailFooterProps {
  isOwner: boolean;
}

export function DetailFooter({ isOwner }: DetailFooterProps) {
  return (
    <Dialog>
      <footer className="z-10 fixed bottom-0 mx-auto w-full max-w-[calc(var(--space-mobileMax)-2px)] bg-white flex justify-around items-center min-h-[var(--space-header)] px-4 py-2 shadow-[var(--bottom-nav-shadow)]">
        {isOwner ? (
          <Button variant="joinFullBtn" size="lg" className="w-[85%]">
            참여하기
          </Button>
        ) : (
          <div className="flex justify-between w-[85%]">
            <Button variant="joinBtn" size="lg" className="w-[49%]">
              수정하기
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="!border-1 border-[var(--dark-green)] w-[49%] button-lg !text-[var(--dark-green)]"
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
  );
}
