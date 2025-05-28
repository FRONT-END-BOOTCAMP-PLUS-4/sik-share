import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ChatListItem from "./ChatList";
import { motion, AnimatePresence } from "motion/react";

interface TabProps {
  shareData: [];
  togetherData: [];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Tab({
  shareData,
  togetherData,
  activeTab,
  setActiveTab,
}: TabProps) {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList>
        <TabsTrigger value="share">나눔</TabsTrigger>
        <TabsTrigger value="together">같이 장보기</TabsTrigger>
      </TabsList>
      <TabsContent value="share">
        <AnimatePresence>
          {shareData.map((chat) => (
            <motion.div
              key={chat.chatId}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.25 }}
            >
              <ChatListItem {...chat} />
            </motion.div>
          ))}
        </AnimatePresence>
      </TabsContent>
      <TabsContent value="together">
        <AnimatePresence>
          {togetherData.map((chat) => (
            <motion.div
              key={chat.chatId ?? chat.id ?? chat.title} // 유니크키
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.25 }}
            >
              <ChatListItem {...chat} />
            </motion.div>
          ))}
        </AnimatePresence>
      </TabsContent>
    </Tabs>
  );
}
