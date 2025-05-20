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
    if (!text.trim()) return;

    const newMessage: Message = {
      type: "me",
      nickname: "나", // 실제 로그인 사용자 정보로 교체 필요
      imageUrl: "/assets/images/example/thumbnail.png",
      message: text,
      count: 0,
      time: new Date().toLocaleTimeString(), // 또는 dayjs
    };
    onSend(newMessage);
    socket.emit("message", {
      chatId,
      ...newMessage,
    });

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
