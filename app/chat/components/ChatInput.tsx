"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import socket from "@/lib/socket";

interface ChatInputProps {
  roomId: string;
}

export default function ChatInput({ roomId }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    socket.emit("sendMessage", {
      roomId,
      content: message,
    });
    console.log(message);
    setMessage("");
  };

  return (
    <div className="flex items-center px-4 py-4 gap-[10px] h-[68px] w-full border-t">
      <input
        type="text"
        placeholder="메시지를 입력하세요..."
        className="flex-1 body-sm px-3 py-2 border rounded-full outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={handleSend}>
        <Send size={20} />
      </Button>
    </div>
  );
}
