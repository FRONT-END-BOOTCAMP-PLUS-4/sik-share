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
  id?: number;
  tempId?: string;
  senderId: string | null;
  content: string;
  createdAt: string;
  sender?: {
    nickname: string;
    imageUrl?: string;
    profileUrl?: string;
  };
  readCount: number;
  count?: number;
}

interface TogetherInfoProps {
  chatId?: string;
  title: string;
  imageUrl?: string;
  locationNote?: string;
  meetingDate?: string;
  participantCount?: number;
  status: number;
}

interface ChatRoomProps {
  type: "share" | "together";
  chatId: string;
  messages: Message[];
  otherUser?: {
    nickname: string;
    imageUrl: string;
    profileUrl: string;
    temperature: number;
  };
  shareInfo?: {
    title: string;
    locationNote: string;
    imageUrl: string;
    meetingDate?: string;
    status?: number;
  };
  togetherInfo?: TogetherInfoProps;
  senderId: string;
}

interface FormattedMessage {
  id?: string | number;
  tempId?: string;
  type: "other" | "me" | "system";
  nickname: string;
  imageUrl: string;
  message: string;
  readCount: number;
  time: string;
  count?: number;
  senderId?: string | null;
}

function toFormattedMessage(
  msg: Message | FormattedMessage,
  currentUserId: string,
): FormattedMessage {
  if ("type" in msg) {
    return msg as FormattedMessage;
  }

  let type: "me" | "other" | "system";
  if (msg.senderId === "system") {
    type = "system";
  } else if (msg.senderId === currentUserId) {
    type = "me";
  } else {
    type = "other";
  }

  return {
    id: msg.id,
    tempId: msg.tempId,
    type,
    nickname:
      msg.senderId === "system"
        ? "system"
        : msg.sender?.nickname || "알 수 없음",
    imageUrl:
      msg.senderId === "system"
        ? "/assets/images/example/thumbnail.png"
        : msg.sender?.imageUrl ||
          msg.sender?.profileUrl ||
          "/assets/images/example/default-profile.png",
    message: msg.content,
    readCount: msg.readCount,
    time: msg.createdAt,
    count: msg.count,
    senderId: msg?.senderId,
  };
}

export default function ChatRoom({
  type,
  chatId,
  messages: initialMessages,
  otherUser,
  shareInfo,
  togetherInfo,
  senderId,
}: ChatRoomProps) {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  useEffect(() => {
    if (!session?.user?.id) return;

    if (type === "together") {
      socket.emit("joinGroupRoom", { chatId, userId: session.user.id });
    } else {
      socket.emit("joinRoom", { chatId, userId: session.user.id });
    }

    const msgEvent =
      type === "together" ? "groupbuy chat message" : "chat message";
    const handler = (msg: Message) => {
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
    socket.on(msgEvent, handler);

    const handleMessagesRead = ({ readIds }: { readIds: number[] }) => {
      setMessages((prev) =>
        prev.map((m) =>
          readIds.includes(m.id as number) && m.readCount !== 0
            ? { ...m, readCount: 0 }
            : m,
        ),
      );
    };
    if (type === "share") {
      socket.on("messagesRead", handleMessagesRead);
    }

    return () => {
      socket.emit("leaveRoom", chatId);
      socket.off(msgEvent, handler);
      if (type === "share") {
        socket.off("messagesRead", handleMessagesRead);
      }
    };
  }, [chatId, session?.user?.id, type]);

  const handleSendMessage = (msg: Message) => {
    if (type === "together") {
      const participantCount = togetherInfo?.participantCount ?? 1;
      msg.count = Math.max(0, participantCount - 1);
      socket.emit("groupbuy chat message", msg);
    } else {
      socket.emit("chat message", msg);
    }
  };

  const formattedMessages = session?.user?.id
    ? messages.map((msg) => {
        console.log("before format:", msg);
        return toFormattedMessage(msg, session.user.id);
      })
    : [];

  console.log("formattedMessages:", formattedMessages);

  return (
    <div className="flex flex-col h-full">
      {type === "together" && togetherInfo ? (
        <ChatHeader
          type="together"
          title={togetherInfo.title}
          participantCount={togetherInfo.participantCount ?? 0}
        />
      ) : type === "share" && otherUser ? (
        <ChatHeader type="share" otherUser={otherUser} />
      ) : null}
      {type === "together" && togetherInfo && (
        <TogetherInfo
          chatId={chatId}
          title={togetherInfo.title}
          imageUrl={togetherInfo.imageUrl}
          meetingDate={togetherInfo.meetingDate}
          locationNote={togetherInfo.locationNote}
          status={togetherInfo.status}
        />
      )}
      {type === "share" && shareInfo && (
        <ShareInfo
          info={{
            ...shareInfo,
            status: shareInfo.status ?? 0,
          }}
          chatId={chatId}
        />
      )}
      <ChatMessageList messages={formattedMessages} />
      <ChatInput
        chatId={chatId}
        senderId={session?.user.id ?? ""}
        action={handleSendMessage}
      />
    </div>
  );
}
