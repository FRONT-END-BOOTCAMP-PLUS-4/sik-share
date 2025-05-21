"use client";

import { useParams } from "next/navigation";
import ChatRoom from "../../components/ChatRoom";

export default function TogetherChat() {
  const params = useParams();
  const chatId = params.chatId as string;

  return <ChatRoom type="together" chatId={chatId} />;
}
