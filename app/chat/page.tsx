"use client";

import { useEffect, useState } from "react";
import Tab from "./components/Tab";
import socket from "@/lib/socket";
import Footer from "@/components/common/Footer";
import { useSession } from "next-auth/react";

interface ShareChatListItem {
  chatId: string;
  imageUrl: string[];
  nickname: string;
  temperature: number;
  lastMessage: string;
  lastMessageAt: string;
  unreadCount: number;
  type: "share";
  participantCount: number;
  thumbnailUrl?: string;
}

interface GroupBuyChatListItem {
  chatId: string;
  groupBuyId: number;
  groupBuyTitle: string;
  imageUrl: string[];
  lastMessage: string | null;
  lastMessageAt: string | null;
  participantCount: number;
  type: "together";
  unreadCount: number;
}

export default function ChatList() {
  const [shareData, setShareData] = useState<ShareChatListItem[]>([]);
  const [togetherData, setTogetherData] = useState<GroupBuyChatListItem[]>([]);
  const [activeTab, setActiveTab] = useState("share");
  const { data: session } = useSession();

  useEffect(() => {
    fetch("/api/chat/list?type=share")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a: ShareChatListItem, b: ShareChatListItem) =>
          (b.lastMessageAt || "") > (a.lastMessageAt || "") ? 1 : -1,
        );
        setShareData(data);
      });
  }, []);

  useEffect(() => {
    if (activeTab === "together" && togetherData.length === 0) {
      fetch("/api/chat/list?type=together")
        .then((res) => res.json())
        .then((data) => {
          data.sort((a: GroupBuyChatListItem, b: GroupBuyChatListItem) =>
            (b.lastMessageAt || "") > (a.lastMessageAt || "") ? 1 : -1,
          );
          setTogetherData(data);
        });
    }
  }, [activeTab, togetherData.length]);

  useEffect(() => {
    if (!session?.user?.id) return;

    socket.emit("subscribeChatList", { userId: session.user.id });

    function handleShareUpdate(
      update: Partial<ShareChatListItem> & { chatId: number; type?: "share" },
    ) {
      setShareData((prev) => {
        let exists = false;
        const updated = prev.map((item) => {
          if (item.chatId === update.chatId) {
            exists = true;
            return { ...item, ...update };
          }
          return item;
        });
        const nextList = exists
          ? updated
          : [{ ...update, type: "share" } as ShareChatListItem, ...prev];
        nextList.sort((a, b) =>
          (b.lastMessageAt || "") > (a.lastMessageAt || "") ? 1 : -1,
        );
        return nextList;
      });
    }

    function handleTogetherUpdate(
      update: Partial<GroupBuyChatListItem> & {
        chatId: number;
        type?: "together";
      },
    ) {
      setTogetherData((prev) => {
        let exists = false;
        const updated = prev.map((item) => {
          if (item.chatId === update.chatId) {
            exists = true;
            return { ...item, ...update };
          }
          return item;
        });
        const nextList = exists
          ? updated
          : [{ ...update, type: "together" } as GroupBuyChatListItem, ...prev];
        nextList.sort((a, b) =>
          (b.lastMessageAt || "") > (a.lastMessageAt || "") ? 1 : -1,
        );
        return nextList;
      });
    }

    socket.on("chatListUpdate", handleShareUpdate);
    socket.on("groupBuyChatListUpdate", handleTogetherUpdate);

    return () => {
      socket.emit("unsubscribeChatList", { userId: session.user.id });
      socket.off("chatListUpdate", handleShareUpdate);
      socket.off("groupBuyChatListUpdate", handleTogetherUpdate);
    };
  }, [session?.user?.id]);

  return (
    <>
      <div className="w-full h-[66px] p-4 title-md flex justify-start items-start">
        채팅
      </div>
      <Tab
        shareData={shareData}
        togetherData={togetherData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Footer />
    </>
  );
}
