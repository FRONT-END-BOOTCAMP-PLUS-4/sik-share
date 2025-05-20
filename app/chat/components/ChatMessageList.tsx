import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";

interface Message {
  type: "other" | "me";
  nickname: string;
  imageUrl: string;
  message: string;
  count: number;
  time: string;
}

interface ChatMessageListProps {
  messages: Message[];
}

export default function ChatMessageList({ messages }: ChatMessageListProps) {
  return (
    <div className="w-full px-4 py-4 flex flex-col gap-4">
      {messages.map((msg, index) => (
        <ChatMessage
          key={index}
          type={msg.type}
          nickname={msg.nickname}
          imageUrl={msg.imageUrl}
          message={msg.message}
          count={msg.count}
          time={msg.time}
        />
      ))}
    </div>
  );
}
