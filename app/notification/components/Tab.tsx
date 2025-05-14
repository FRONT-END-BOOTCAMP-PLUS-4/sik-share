import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import NotiTabList from "./TabList";

export default function Tab() {
  return (
    <Tabs defaultValue="share" className="w-full">
      <TabsList>
        <TabsTrigger value="share">나눔</TabsTrigger>
        <TabsTrigger value="together">같이 장보기</TabsTrigger>
      </TabsList>
      <TabsContent value="share">
        <NotiTabList
          type="share"
          time={1}
          nickname="하랑"
          title="프론트엔드 노트북 나눔"
        />
        <NotiTabList
          type="end"
          time={2}
          nickname="하랑"
          title="프론트엔드 노트북 나눔"
        />
        <NotiTabList
          type="review"
          time={3}
          nickname="하랑"
          title="프론트엔드 노트북 나눔"
        />
      </TabsContent>
      <TabsContent value="together">
        <NotiTabList
          type="together"
          time={1}
          nickname="하랑"
          title="프론트엔드 노트북 나눔"
        />
      </TabsContent>
    </Tabs>
  );
}
