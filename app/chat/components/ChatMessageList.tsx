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
  chatId?: string;
  shareId?: number;
}

interface ChatMessageListProps {
  messages: FormattedMessage[];
  chatId: string;
  shareId?: number;
}

export default function ChatMessageList({
  messages,
  chatId,
  shareId,
}: ChatMessageListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
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
      className="w-full px-4 py-4 flex flex-col gap-4 h-full overflow-y-scroll"
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
          senderId={msg.senderId ?? undefined}
          chatId={msg.chatId ?? chatId}
          shareId={shareId}
        />
      ))}
    </div>
  );
}
