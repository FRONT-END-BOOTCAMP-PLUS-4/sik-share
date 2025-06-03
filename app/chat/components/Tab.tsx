import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ChatListItem from "./ChatList";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Loading from "@/components/common/Loading";
import { LoadingFoodLottie } from "@/components/lotties/LoadingFoodLottie";

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
  isShareLoading: boolean;
  isTogetherLoading: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Tab({
  shareData,
  togetherData,
  isShareLoading,
  isTogetherLoading,
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
          {isShareLoading ? (
            <LoadingFoodLottie />
          ) : shareData.length === 0 ? (
            <div className="w-full flex flex-col justify-center items-center py-12 text-zinc-400">
              <p className="mt-6">참여한 나눔이 없어요</p>
            </div>
          ) : (
            shareData.map((chat) => (
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
            ))
          )}
        </AnimatePresence>
      </TabsContent>
      <TabsContent value="together">
        <AnimatePresence>
          {isTogetherLoading ? (
            <div className="w-full py-12 text-center text-zinc-400">
              로딩 중...
            </div>
          ) : togetherData.length === 0 ? (
            <div className="flex flex-col items-center py-12 text-zinc-400">
              <p className="mt-6">참여한 같이장보기가 없어요</p>
            </div>
          ) : (
            togetherData.map((chat) => (
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
            ))
          )}
        </AnimatePresence>
      </TabsContent>
    </Tabs>
  );
}
