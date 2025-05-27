"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState, useCallback } from "react";
import socket from "@/lib/socket";
import ChatHeader from "./ChatHeader";
import ShareInfo from "./ShareInfo";
import ChatMessageList from "./ChatMessageList";
import ChatInput from "./ChatInput";
import TogetherInfo from "./TogetherInfo";

// ====== 타입 정의 ======
interface Message {
  id?: number;
  tempId?: string;
  senderId: string;
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
  title: string;
  imageUrl?: string;
  locationNote?: string;
  meetingDate?: string;
  participantCount?: number;
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
  };
  togetherInfo?: TogetherInfoProps;
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
  count?: number;
}

// ====== 메시지 변환 함수 ======
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
    count: msg.count,
  };
}

// ====== ChatRoom 컴포넌트 ======
export default function ChatRoom({
  type,
  chatId,
  messages: initialMessages,
  otherUser,
  shareInfo,
  togetherInfo,
}: ChatRoomProps) {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  // 메시지 수신 핸들러
  useEffect(() => {
    if (!session?.user?.id) return;

    // --- 방 입장 이벤트명 분기
    if (type === "together") {
      socket.emit("joinGroupRoom", { chatId, userId: session.user.id });
    } else {
      socket.emit("joinRoom", { chatId, userId: session.user.id });
    }

    // --- 메시지 수신 이벤트명 분기
    const msgEvent =
      type === "together" ? "groupbuy chat message" : "chat message";
    const handler = (msg: Message) => {
      console.log("[소켓 메시지 수신] 서버에서 받은 msg:", msg);
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

    // --- 읽음 처리(1:1만, 단체는 필요 시 추가)
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

    // 클린업
    return () => {
      // 퇴장
      socket.emit("leaveRoom", chatId);
      socket.off(msgEvent, handler);
      if (type === "share") {
        socket.off("messagesRead", handleMessagesRead);
      }
    };
  }, [chatId, session?.user?.id, type]);

  // 메시지 보내기 핸들러
  const handleSendMessage = (msg: Message) => {
    // 단체채팅과 1:1채팅에 따라 이벤트 분기
    if (type === "together") {
      const participantCount = togetherInfo?.participantCount ?? 1;
      msg.count = Math.max(0, participantCount - 1);
      socket.emit("groupbuy chat message", msg);
    } else {
      socket.emit("chat message", msg);
    }
  };

  // 메시지 변환
  const formattedMessages = session?.user?.id
    ? messages.map((msg) => toFormattedMessage(msg, session.user.id))
    : [];

  return (
    <div className="flex flex-col h-full">
      {/* 헤더 */}
      {type === "together" && togetherInfo ? (
        <ChatHeader
          type={type}
          title={togetherInfo.title}
          participantCount={togetherInfo.participantCount ?? 0}
        />
      ) : (
        <ChatHeader otherUser={otherUser!} type={type} />
      )}

      {/* 상단 info */}
      {type === "together" && togetherInfo && (
        <TogetherInfo
          title={togetherInfo.title}
          imageUrl={togetherInfo.imageUrl}
          meetingDate={togetherInfo.meetingDate}
          locationNote={togetherInfo.locationNote}
        />
      )}
      {type === "share" && shareInfo && (
        <ShareInfo info={shareInfo} chatId={chatId} />
      )}

      {/* 메시지 리스트 */}
      <ChatMessageList messages={formattedMessages} />

      {/* 입력 */}
      <ChatInput
        chatId={chatId}
        senderId={session?.user.id ?? ""}
        onSend={handleSendMessage}
      />
    </div>
  );
}
