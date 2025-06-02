"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ChatRoom from "../../components/ChatRoom";
import { useSession } from "next-auth/react";

interface ChatMessage {
  id: number;
  type: "me" | "other";
  nickname: string;
  imageUrl: string;
  message: string;
  time: string;
  readCount: number;
  senderId?: string | null;
  tempId?: string;
  count?: number;
  createdAt: string;
  sender?: {
    nickname: string;
    imageUrl: string;
    profileUrl?: string;
  };
  content: string;
}

interface OtherUser {
  nickname: string;
  imageUrl: string;
  temperature: number;
  profileUrl?: string;
}

interface ShareInfo {
  title: string;
  locationNote: string;
  imageUrl: string[];
}

export default function ShareChat() {
  const { data: session } = useSession();

  const params = useParams();
  const chatId = params.chatId as string;

  const [chatData, setChatData] = useState<{
    messages: ChatMessage[];
    otherUser: OtherUser;
    shareInfo: ShareInfo;
  } | null>(null);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const res = await fetch(`/api/chat/${chatId}/shares`);
        if (res.ok) {
          const data = await res.json();
          setChatData(data);
        } else {
          console.error("메시지 불러오기 실패", await res.text());
        }
      } catch (err) {
        console.error("네트워크 오류:", err);
      }
    }

    if (chatId) fetchMessages();
  }, [chatId]);

  if (!chatData) {
    return <div className="p-4">로딩 중...</div>;
  }

  return (
    <ChatRoom
      type="share"
      chatId={chatId}
      messages={chatData.messages.map((msg) => ({
        id: msg.id,
        senderId: msg.senderId ?? "system",
        content: msg.message ?? "",
        createdAt: msg.time ?? new Date().toISOString(),
        sender: {
          nickname: msg.nickname ?? "",
          imageUrl: msg.imageUrl ?? "",
          profileUrl: msg.imageUrl ?? "",
        },
        readCount: msg.readCount ?? 0,
      }))}
      otherUser={{
        ...chatData.otherUser,
        profileUrl:
          chatData.otherUser.profileUrl || chatData.otherUser.imageUrl || "",
      }}
      shareInfo={chatData.shareInfo}
      senderId={session?.user?.id || ""}
    />
  );
}
