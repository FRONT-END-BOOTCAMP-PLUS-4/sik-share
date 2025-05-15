import ChatHeader from "./ChatHeader";
import ShareInfo from "./ShareInfo";
import ChatMessageList from "./ChatMessageList";
import ChatInput from "./ChatInput";
import TogetherInfo from "./TogetherInfo";

interface ChatRoomProps {
  type: "share" | "together";
}

export default function ChatRoom({ type }: ChatRoomProps) {
  return (
    <div className="flex flex-col h-full">
      <ChatHeader type={type} />
      {type === "share" && <ShareInfo />}
      {type === "together" && <TogetherInfo />}
      <ChatMessageList />
      <ChatInput />
    </div>
  );
}
