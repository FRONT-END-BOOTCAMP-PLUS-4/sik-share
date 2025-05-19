import ChatHeader from "./ChatHeader";
import ShareInfo from "./ShareInfo";
import ChatMessageList from "./ChatMessageList";
import ChatInput from "./ChatInput";
import TogetherInfo from "./TogetherInfo";
import { useEffect } from "react";
import socket from "@/lib/socket";

interface ChatRoomProps {
  type: "share" | "together";
  roomId: string;
}

export default function ChatRoom({ type, roomId }: ChatRoomProps) {
  useEffect(() => {
    socket.emit("joinRoom", roomId);

    socket.on("message", (msg) => {
      console.log(`[${roomId}] 메시지 수신:`, msg);
    });

    return () => {
      socket.emit("leaveRoom", roomId);
      socket.off("message");
    };
  }, [roomId]);

  return (
    <div className="flex flex-col h-full">
      <ChatHeader type={type} />
      {type === "share" && <ShareInfo />}
      {type === "together" && <TogetherInfo />}
      <ChatMessageList />
      <ChatInput roomId={roomId} />
    </div>
  );
}
