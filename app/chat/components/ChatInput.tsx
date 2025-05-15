import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="flex items-center px-4 py-4 gap-[10px] h-[68px] w-full border-t absolute bottom-30">
      <input
        type="text"
        placeholder="메시지를 입력하세요..."
        className="flex-1 body-sm px-3 py-2 border rounded-full outline-none"
      />
      <Button>
        <Send size={20} />
      </Button>
    </div>
  );
}
