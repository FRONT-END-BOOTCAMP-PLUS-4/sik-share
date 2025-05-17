import ChatMessage from "./ChatMessage";

export default function ChatMessageList() {
  const dummyMessages = [
    {
      type: "other",
      nickname: "씩씩한 감자",
      imageUrl: "/assets/images/example/thumbnail.png",
      message: "안녕하세요! 참가하고 싶어요!",
      count: 1,
      time: "오후 6:54",
    },
    {
      type: "me",
      nickname: "나",
      imageUrl: "",
      message: "네! 괜찮습니다.",
      count: 0,
      time: "오후 6:55",
    },
  ];

  return (
    <div className="w-full px-4 py-4 flex flex-col gap-4">
      {dummyMessages.map((msg, index) => (
        <ChatMessage
          key={index}
          type={msg.type}
          nickname={msg.nickname}
          imageUrl={msg.imageUrl}
          message={msg.message}
          count={msg.count}
          time={msg.time}
        />
      ))}
    </div>
  );
}
