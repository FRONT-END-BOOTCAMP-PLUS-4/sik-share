"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState, useCallback } from "react";
import socket from "@/lib/socket";
import ChatHeader from "./ChatHeader";
import ShareInfo from "./ShareInfo";
import ChatMessageList from "./ChatMessageList";
import ChatInput from "./ChatInput";
import TogetherInfo from "./TogetherInfo";

interface Message {
  id?: number;
  tempId?: string;
  senderId: string;
  content: string;
  createdAt: string;
  sender?: {
    nickname: string;
    imageUrl: string;
    profileUrl: string;
  };
  readCount: number;
}

interface ChatRoomProps {
  type: "share" | "together";
  chatId: string;
  messages: Message[];
  otherUser: {
    nickname: string;
    imageUrl: string;
    profileUrl: string;
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
      msg.sender?.imageUrl ||
      msg.sender?.profileUrl ||
      "/assets/images/example/default-profile.png",
    message: msg.content,
    readCount: msg.readCount,
    time: msg.createdAt,
  };
}

interface FormattedMessage {
  id?: string | number;
  tempId?: string;
  type: "other" | "me";
  nickname: string;
  imageUrl: string;
  message: string;
  readCount: number;
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

  // 메시지 추가/업데이트 함수 (id 기준)
  const handleMessage = useCallback((msg: Message) => {
    setMessages((prev) => {
      const idx = prev.findIndex((m) => m.id === msg.id);
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], ...msg };
        return copy;
      }
      return [...prev, msg];
    });
  }, []);

  useEffect(() => {
    // joinRoom
    const join = () => {
      if (session?.user?.id) {
        socket.emit("joinRoom", { chatId, userId: session.user.id });
      }
    };
    socket.on("connect", join);

    // 이미 연결되어 있으면 바로 joinRoom
    if (socket.connected && session?.user?.id) {
      socket.emit("joinRoom", { chatId, userId: session.user.id });
    }

    // 메시지 수신 핸들러
    const handleMessage = (msg: Message) => {
      setMessages((prev) => {
        const idx = prev.findIndex((m) => m.id === msg.id);
        if (idx !== -1) {
          const copy = [...prev];
          copy[idx] = { ...copy[idx], ...msg };
          return copy;
        }
        return [...prev, msg];
      });
    };
    socket.on("chat message", handleMessage);

    // 읽음 처리 메시지 핸들러
    const handleMessagesRead = ({ readIds }: { readIds: number[] }) => {
      setMessages((prev) =>
        prev.map((m) =>
          readIds.includes(m.id as number) && m.readCount !== 0
            ? { ...m, readCount: 0 }
            : m,
        ),
      );
    };
    socket.on("messagesRead", handleMessagesRead);

    return () => {
      socket.emit("leaveRoom", chatId);
      socket.off("chat message", handleMessage);
      socket.off("connect", join);
      socket.off("messagesRead", handleMessagesRead);
    };
  }, [chatId, session?.user?.id]);

  // 메시지 보내기
  const handleSendMessage = (msg: Message) => {
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
