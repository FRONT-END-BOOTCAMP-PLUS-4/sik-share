"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import socket from "@/lib/socket";
import ChatHeader from "./ChatHeader";
import ShareInfo from "./ShareInfo";
import ChatMessageList from "./ChatMessageList";
import ChatInput from "./ChatInput";
import TogetherInfo from "./TogetherInfo";

interface Message {
  id: number;
  senderId: string;
  content: string;
  createdAt: string;
  sender?: {
    nickname: string;
    imageUrl: string;
  };
}

interface ChatRoomProps {
  type: "share" | "together";
  chatId: string;
  messages: Message[];
  otherUser: {
    nickname: string;
    imageUrl: string;
    temperature: number;
  };
  shareInfo?: {
    title: string;
    location: string;
    imageUrl: string;
  };
}

// 변환 함수
function toFormattedMessage(
  msg: Message | FormattedMessage,
  currentUserId: string,
): FormattedMessage {
  if ("type" in msg) {
    return msg as FormattedMessage;
  }
  return {
    type: msg.senderId === currentUserId ? "me" : "other",
    nickname: msg.sender?.nickname || "알 수 없음",
    imageUrl:
      msg.sender?.imageUrl || "/assets/images/example/default-profile.png",
    message: msg.content,
    count: 0,
    time: msg.createdAt,
  };
}

interface FormattedMessage {
  type: "other" | "me";
  nickname: string;
  imageUrl: string;
  message: string;
  count: number;
  time: string;
}

export default function ChatRoom({
  type,
  chatId,
  messages: initialMessages,
  otherUser,
  shareInfo,
}: ChatRoomProps) {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  // 소켓 처리
  useEffect(() => {
    socket.emit("joinRoom", chatId);

    const handleMessage = (msg: Message) => {
      console.log("수신된 메시지:", msg);
      setMessages((prev) => {
        if (prev.some((m) => m.id === msg.id)) return prev;
        return [...prev, msg];
      });
    };
    socket.on("chat message", handleMessage);

    console.log("소켓 객체:", socket);
    console.log("소켓 연결 상태:", socket.connected, socket.id);

    return () => {
      socket.emit("leaveRoom", chatId);
      socket.off("chat message", handleMessage);
    };
  }, [chatId]);

  const handleSendMessage = (msg: Message) => {
    socket.emit("chat message", msg);
    setMessages((prev) => [...prev, msg]);
  };

  // 메시지 변환
  const formattedMessages = session?.user?.id
    ? messages.map((msg) => toFormattedMessage(msg, session.user.id))
    : [];

  return (
    <div className="flex flex-col h-full">
      <ChatHeader otherUser={otherUser} type={type} />
      {type === "share" && shareInfo && <ShareInfo info={shareInfo} />}
      {type === "together" && <TogetherInfo />}
      <ChatMessageList messages={formattedMessages} />
      <ChatInput
        chatId={chatId}
        senderId={session?.user.id ?? ""}
        onSend={handleSendMessage}
      />
    </div>
  );
}
