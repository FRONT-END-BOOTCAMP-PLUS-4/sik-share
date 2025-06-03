import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ChatListItem from "./ChatList";
import { motion, AnimatePresence } from "motion/react";

interface ChatListProps {
  chatId: string;
  type: "share" | "together";
  imageUrl?: string[];
  groupBuyTitle?: string;
  title?: string;
  nickname?: string;
  totalPeople?: number;
  temperature?: number;
  lastMessageAt: string | null;
  lastMessage: string | null;
  unreadCount: number;
  participantCount: number;
  id?: string;
  thumbnailUrl?: string;
}

interface TabProps {
  shareData: ChatListProps[];
  togetherData: ChatListProps[];
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
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full mb-26"
    >
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
              key={chat.chatId ?? chat.id ?? chat.title}
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
