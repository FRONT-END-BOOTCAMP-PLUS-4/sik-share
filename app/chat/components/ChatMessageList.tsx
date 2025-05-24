import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

interface FormattedMessage {
  id?: string | number;
  type: "other" | "me";
  nickname?: string;
  imageUrl?: string;
  message: string;
  readCount?: number;
  time: string;
}

interface ChatMessageListProps {
  messages: FormattedMessage[];
}

export default function ChatMessageList({ messages }: ChatMessageListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={scrollRef}
      className="w-full px-4 py-4 flex flex-col gap-4 h-[calc(100vh-240px)] overflow-y-scroll"
    >
      {messages.map((msg, index) => (
        <ChatMessage
          key={msg.id ?? `tmp-${index}`}
          type={msg.type}
          nickname={msg.nickname ?? ""}
          imageUrl={
            msg.imageUrl ?? "/assets/images/example/default-profile.png"
          }
          message={msg.message}
          readCount={msg.readCount ?? 0}
          time={msg.time}
        />
      ))}
    </div>
  );
}
