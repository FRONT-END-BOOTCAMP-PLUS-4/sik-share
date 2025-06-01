import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

interface FormattedMessage {
  id?: string | number;
  type: "other" | "me" | "system";
  nickname?: string;
  imageUrl?: string;
  message: string;
  readCount?: number;
  time: string;
  count?: number;
  senderId?: string | null;
}

interface ChatMessageListProps {
  messages: FormattedMessage[];
}

export default function ChatMessageList({ messages }: ChatMessageListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  console.log("ChatMessageList messages:", messages);

  // 의존성 배열에 messages를 추가하여 메시지가 변경될 때마다 스크롤을 맨 아래로 이동을 구현했지만,
  // 하지만 biome는 messages가 실제로 직접 effect 안에서 쓰이지 않으니 꼭 필요하냐고 물어봄.
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
          count={msg.count}
          time={msg.time}
          senderId={msg.senderId}
        />
      ))}
    </div>
  );
}
