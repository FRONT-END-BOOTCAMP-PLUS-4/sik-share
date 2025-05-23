"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ChatRoom from "../../components/ChatRoom";

export default function TogetherChat() {
  const params = useParams();
  const chatId = params.chatId as string;

  const [messages, setMessages] = useState([]);
  const [info, setInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!chatId) return;
    setLoading(true);
    fetch(`/api/chat/${chatId}/together`)
      .then((res) => res.json())
      .then((data) => {
        console.log("fetch로 받아온 data:", data);
        setMessages(data.messages || []);
        setInfo(data.info || null);
      })
      .finally(() => setLoading(false));
  }, [chatId]);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-10">
        Loading...
      </div>
    );
  }
  if (!info) {
    return (
      <div className="w-full flex justify-center items-center py-10">
        채팅방 정보를 불러올 수 없습니다.
      </div>
    );
  }

  return (
    <ChatRoom
      type="together"
      chatId={chatId}
      messages={messages}
      togetherInfo={{
        title: info.title,
        locationNote: info.locationNote || "",
        imageUrl: info.imageUrl,
        meetingDate: info.meetingDate,
        participantCount: info.participantCount,
      }}
    />
  );
}
