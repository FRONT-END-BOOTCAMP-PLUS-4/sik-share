"use client";

import { useEffect, useState } from "react";
import Tab from "./components/Tab";
import socket from "@/lib/socket";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function ChatList() {
  const [shareData, setShareData] = useState([]);
  const [togetherData, setTogetherData] = useState([]);
  const [activeTab, setActiveTab] = useState("share");

  useEffect(() => {
    fetch("/api/chat/list?type=share")
      .then((res) => res.json())
      .then((data) => {
        setShareData(data);
        console.log("서버에서 받아온 shareData:", data);
      });

    socket.on("메세지", (msg) => {
      console.log("받은 메시지:", msg);
    });

    return () => {
      socket.off("메세지");
    };
  }, []);

  useEffect(() => {
    if (activeTab === "together" && togetherData.length === 0) {
      fetch("/api/chat/list?type=together")
        .then((res) => res.json())
        .then((data) => {
          console.log("서버에서 받아온 togetherData:", data);
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
