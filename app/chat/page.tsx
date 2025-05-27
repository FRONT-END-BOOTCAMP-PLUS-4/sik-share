"use client";

import { useEffect, useState } from "react";
import Tab from "./components/Tab";
import socket from "@/lib/socket";
import Footer from "@/components/common/Footer";
import { useSession } from "next-auth/react";

// 🔵 나눔(1:1) 채팅방 타입
interface ShareChatListItem {
  chatId: number;
  imageUrl: string;
  nickname: string;
  temperature: number;
  lastMessage: string;
  lastMessageAt: string;
  unreadCount: number;
  type: "share";
}

// 🔵 단체(같이 장보기) 채팅방 타입
interface GroupBuyChatListItem {
  chatId: number;
  groupBuyId: number;
  groupBuyTitle: string;
  groupBuyImages: string[];
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

  // 🟢 1. 최초 나눔(share) 채팅방 목록 불러오기
  useEffect(() => {
    fetch("/api/chat/list?type=share")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a: ShareChatListItem, b: ShareChatListItem) =>
          (b.lastMessageAt || "") > (a.lastMessageAt || "") ? 1 : -1,
        );
        console.log("shareData 응답", data);
        setShareData(data);
      });
  }, []);

  // 🟢 2. 최초 같이 장보기(together) 채팅방 목록 불러오기
  useEffect(() => {
    if (activeTab === "together" && togetherData.length === 0) {
      fetch("/api/chat/list?type=together")
        .then((res) => res.json())
        .then((data) => {
          // 최신 메시지 기준으로 정렬
          data.sort((a: GroupBuyChatListItem, b: GroupBuyChatListItem) =>
            (b.lastMessageAt || "") > (a.lastMessageAt || "") ? 1 : -1,
          );
          console.log("togetherData 응답", data);
          setTogetherData(data);
        });
    }
  }, [activeTab, togetherData.length]);

  // 🟢 3. 실시간 목록 소켓 구독
  useEffect(() => {
    if (!session?.user?.id) return;

    // 채팅목록 실시간 구독
    socket.emit("subscribeChatList", { userId: session.user.id });

    // 나눔 채팅 목록 업데이트 핸들러
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

    // 단체(같이 장보기) 채팅 목록 업데이트 핸들러
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

    // 클린업
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
