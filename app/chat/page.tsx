"use client";

import { useEffect, useState } from "react";
import Tab from "./components/Tab";
import socket from "@/lib/socket";
import Footer from "@/components/common/Footer";
import { useSession } from "next-auth/react";

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

export default function ChatList() {
  const [shareData, setShareData] = useState<ShareChatListItem[]>([]);
  const [togetherData, setTogetherData] = useState([]);
  const [activeTab, setActiveTab] = useState("share");
  const { data: session } = useSession();

  // 🟢 1. 최초 목록 요청
  useEffect(() => {
    fetch("/api/chat/list?type=share")
      .then((res) => res.json())
      .then((data) => {
        setShareData(data);
        console.log("서버에서 받아온 shareData:", data);
      });
  }, []);

  // 🟢 2. socket을 통한 목록 실시간 갱신 (구독)
  useEffect(() => {
    if (!session?.user?.id) return;

    // ✅ 채팅목록 실시간 구독
    socket.emit("subscribeChatList", { userId: session.user.id });

    // ✅ socket 메시지 핸들러
    function handleChatListUpdate(
      update: Partial<ShareChatListItem> & { chatId: number },
    ) {
      setShareData((prev) => {
        // 1. 기존에 있던 채팅방이면 업데이트
        let exists = false;
        const updated = prev.map((item) => {
          if (item.chatId === update.chatId) {
            exists = true;
            return { ...item, ...update };
          }
          return item;
        });

        // 2. 없으면 새로 추가
        const nextList = exists
          ? updated
          : [{ ...update } as ShareChatListItem, ...prev];

        // 3. 최신 메시지 기준 정렬 (lastMessageAt desc)
        nextList.sort((a, b) =>
          (b.lastMessageAt || "") > (a.lastMessageAt || "") ? 1 : -1,
        );
        return nextList;
      });
    }

    socket.on("chatListUpdate", handleChatListUpdate);

    // 정리(clean-up)
    return () => {
      socket.emit("unsubscribeChatList", { userId: session.user.id });
      socket.off("chatListUpdate", handleChatListUpdate);
    };
  }, [session?.user?.id]);

  // 🟢 3. 같이 장보기 탭도 최초 요청
  useEffect(() => {
    if (activeTab === "together" && togetherData.length === 0) {
      fetch("/api/chat/list?type=together")
        .then((res) => res.json())
        .then((data) => {
          setTogetherData(data);
        });
    }
  }, [activeTab, togetherData.length]);

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
