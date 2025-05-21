"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState, useCallback } from "react";
import socket from "@/lib/socket";
import ChatHeader from "./ChatHeader";
import ShareInfo from "./ShareInfo";
import ChatMessageList from "./ChatMessageList";
import ChatInput from "./ChatInput";
import TogetherInfo from "./TogetherInfo";
import { v4 as uuidv4 } from "uuid"; // npm install uuid

interface Message {
  id?: number; // id가 없을 수도 있음!
  tempId?: string; // optimistic 메시지에만 사용
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

function toFormattedMessage(
  msg: Message | FormattedMessage,
  currentUserId: string,
): FormattedMessage {
  if ("type" in msg) {
    return msg as FormattedMessage;
  }
  return {
    id: msg.id,
    tempId: msg.tempId,
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
  id?: number;
  tempId?: string;
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

  // 🔥 handleMessage를 useCallback으로 고정
  const handleMessage = useCallback((msg: Message) => {
    setMessages((prev) => {
      // 만약 이 메시지와 같은 id를 가진 낙관적 메시지가 있으면 치환
      if (msg.id) {
        // tempId는 없는 서버 메시지임
        return [
          ...prev.filter((m) => m.id !== msg.id && m.tempId !== msg.tempId),
          msg,
        ];
      }
      // id가 없는 경우(거의 없음)
      return [...prev, msg];
    });
  }, []);

  // 소켓 연결
  useEffect(() => {
    // 소켓 연결될 때마다 joinRoom 확실히!
    const join = () => socket.emit("joinRoom", chatId);
    socket.on("connect", join);

    socket.on("chat message", handleMessage);

    // 최초에도 joinRoom 실행!
    socket.emit("joinRoom", chatId);

    return () => {
      socket.emit("leaveRoom", chatId);
      socket.off("chat message", handleMessage);
      socket.off("connect", join);
    };
  }, [chatId, handleMessage]);

  // 🔥 Optimistic UI: tempId로 구분
  const handleSendMessage = (msg: Message) => {
    const tempId = uuidv4();
    // id 없이 임시 메시지 추가
    setMessages((prev) => [...prev, { ...msg, tempId }]);
    socket.emit("chat message", msg);
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
