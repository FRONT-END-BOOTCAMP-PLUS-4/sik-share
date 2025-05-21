import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

interface FormattedMessage {
  id: number;
  type: "other" | "me";
  nickname: string;
  imageUrl: string;
  message: string;
  count: number;
  time: string;
}

interface ChatMessageListProps {
  messages: FormattedMessage[];
}

export default function ChatMessageList({ messages }: ChatMessageListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  console.log(messages);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={scrollRef}
      className="w-full px-4 py-4 flex flex-col gap-4 h-[calc(100vh-380px)] overflow-y-scroll"
    >
      {messages.map((msg, index) => (
        <ChatMessage
          key={msg.id || `tmp-${index}`}
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
