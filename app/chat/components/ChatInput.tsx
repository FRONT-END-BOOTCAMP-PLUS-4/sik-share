"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import socket from "@/lib/socket";

interface Message {
  type: "other" | "me";
  nickname: string;
  imageUrl: string;
  message: string;
  count: number;
  time: string;
}

interface ChatInputProps {
  chatId: string;
  onSend: (message: Message) => void;
}

export default function ChatInput({ chatId, onSend }: ChatInputProps) {
  const [text, setText] = useState("");

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const newMessage: Message = {
      type: "me",
      nickname: "나",
      imageUrl: "/assets/images/example/thumbnail.png",
      message: trimmed,
      count: 0,
      time: new Date().toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    socket.emit("chat message", {
      chatId,
      ...newMessage,
    });

    onSend(newMessage);
    setText("");
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
