"use client";

import { useParams } from "next/navigation";
import ChatRoom from "../../components/ChatRoom";

export default function TogetherChat() {
  const params = useParams();
  const roomId = params.roomId as string;

  return <ChatRoom type="together" roomId={roomId} />;
}