import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

export function GroupBuyFooter() {
  return (
    <div className="fixed bottom-0 z-50 w-full py-3 px-4 bg-white border-t-1 border-zinc-300 flex justify-between items-center">
      <Button variant="joinFullBtn" size="lg" className="w-[85%]">
        참여하기
      </Button>
      <div className="border-1 border-[var(--dark-green)] rounded-[8px] p-2 cursor-pointer">
        <Share2 size={24} />
      </div>
    </div>
  );
}
