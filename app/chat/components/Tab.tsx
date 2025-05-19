import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ChatListItem from "./ChatList";

interface TabProps {
  shareData: any[];
  togetherData: any[];
}

export default function Tab({ shareData, togetherData }: TabProps) {
  return (
    <Tabs defaultValue="share" className="w-full">
      <TabsList>
        <TabsTrigger value="share">나눔</TabsTrigger>
        <TabsTrigger value="together">같이 장보기</TabsTrigger>
      </TabsList>
      <TabsContent value="share">
        {shareData.map((chat, index) => (
          <ChatListItem key={index} {...chat} />
        ))}
      </TabsContent>
      <TabsContent value="together">
        {togetherData.map((chat, index) => (
          <ChatListItem key={index} {...chat} />
        ))}
      </TabsContent>
    </Tabs>
  );
}
