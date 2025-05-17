import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ChatList from "./ChatList";

const shareChatDummy = [
  {
    type: "share",
    nickname: "민지",
    temperature: 36.5,
    lastChatTime: "5분 전",
    chatMessage: "감자 나눔합니다!",
    chatCount: 3,
  },
  {
    type: "share",
    nickname: "지수",
    temperature: 37.2,
    lastChatTime: "10분 전",
    chatMessage: "애호박 드실 분~",
    chatCount: 0,
  },
];

const togetherChatDummy = [
  {
    type: "together",
    title: "마트 공동구매",
    totalPeople: 4,
    lastChatTime: "1시간 전",
    chatMessage: "3명 모였어요! 한 명 더!",
    chatCount: 5,
  },
  {
    type: "together",
    title: "코스트코 같이 가요",
    totalPeople: 2,
    lastChatTime: "3시간 전",
    chatMessage: "시간 맞는 분 계신가요?",
    chatCount: 1,
  },
];

export default function Tab() {
  return (
    <Tabs defaultValue="share" className="w-full">
      <TabsList>
        <TabsTrigger value="share">나눔</TabsTrigger>
        <TabsTrigger value="together">같이 장보기</TabsTrigger>
      </TabsList>
      <TabsContent value="share">
        {shareChatDummy.map((chat, index) => (
          <ChatList key={index} {...chat} />
        ))}
      </TabsContent>
      <TabsContent value="together">
        {togetherChatDummy.map((chat, index) => (
          <ChatList key={index} {...chat} />
        ))}
      </TabsContent>
    </Tabs>
  );
}
