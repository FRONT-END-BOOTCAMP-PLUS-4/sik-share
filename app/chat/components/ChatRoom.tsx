"use client";

import { useEffect, useState } from "react";
import socket from "@/lib/socket";
import ChatHeader from "./ChatHeader";
import ShareInfo from "./ShareInfo";
import ChatMessageList from "./ChatMessageList";
import ChatInput from "./ChatInput";
import TogetherInfo from "./TogetherInfo";

interface Message {
  type: "other" | "me";
  nickname: string;
  imageUrl: string;
  message: string;
  count: number;
  time: string;
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

export default function ChatRoom({
  type,
  chatId,
  messages: initialMessages,
  otherUser,
  shareInfo,
}: ChatRoomProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  useEffect(() => {
    socket.emit("joinRoom", chatId);

    socket.on("message", (msg: Message) => {
      console.log(`[${chatId}] 메시지 수신:`, msg);
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.emit("leaveRoom", chatId);
      socket.off("message");
    };
  }, [chatId]);

  const handleSendMessage = (newMessage: Message) => {
    setMessages((prev) => [...prev, newMessage]);
    socket.emit("message", newMessage);
  };

  return (
    <div className="flex flex-col h-full">
      <ChatHeader otherUser={otherUser} type={type} />
      {type === "share" && shareInfo && <ShareInfo info={shareInfo} />}
      {type === "together" && <TogetherInfo />}
      <ChatMessageList messages={messages} />
      <ChatInput chatId={chatId} onSend={handleSendMessage} />
    </div>
  );
}
