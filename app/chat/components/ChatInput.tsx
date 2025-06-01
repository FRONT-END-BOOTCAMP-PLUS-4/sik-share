"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface Message {
  chatId: string;
  senderId: string;
  content: string;
  createdAt: string;
}

interface ChatInputProps {
  chatId: string;
  senderId: string;
  action: (message: Message) => void;
}

export default function ChatInput({
  chatId,
  senderId,
  action,
}: ChatInputProps) {
  const [text, setText] = useState("");

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    const msg = {
      chatId: chatId,
      senderId,
      content: trimmed,
      createdAt: new Date().toISOString(),
    };
    action(msg);
    console.log("Sending message:", msg);
    setText("");
  };

  return (
    <form
      className="flex items-center px-4 py-4 gap-[10px] h-[68px] w-full border-t"
      onSubmit={handleSend}
      autoComplete="off"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 body-sm px-3 py-2 border rounded-full outline-none"
        placeholder="메시지를 입력하세요"
      />
      <Button type="submit">
        <Send size={20} />
      </Button>
    </form>
  );
}
