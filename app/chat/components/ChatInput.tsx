"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import socket from "@/lib/socket";

interface ChatInputProps {
  chatId: string;
  senderId: string;
  onSend: (message: any) => void;
}

export default function ChatInput({
  chatId,
  senderId,
  onSend,
}: ChatInputProps) {
  const [text, setText] = useState("");

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    // 메시지 객체를 만듭니다!
    const msg = {
      chatId: Number(chatId),
      senderId,
      content: trimmed,
      createdAt: new Date().toISOString(),
    };

    socket.emit("chat message", msg);
    onSend(msg);
    setText("");
    console.log(msg);
  };

  return (
    <div className="flex items-center px-4 py-4 gap-[10px] h-[68px] w-full border-t">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        className="flex-1 body-sm px-3 py-2 border rounded-full outline-none"
        placeholder="메시지를 입력하세요"
      />
      <Button onClick={handleSend}>
        <Send size={20} />
      </Button>
    </div>
  );
}
