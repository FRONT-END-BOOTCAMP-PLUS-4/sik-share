"use client";

import { useEffect, useState } from "react";
import Tab from "./components/Tab";
import socket from "@/lib/socket";

export default function ChatList() {
  const [shareData, setShareData] = useState([]);
  const [togetherData, setTogetherData] = useState([]);

  useEffect(() => {
    socket.on("메세지", (msg) => {
      console.log("받은 메시지:", msg);
    });

    fetch("/api/chat/list")
      .then((res) => res.json())
      .then((data) => {
        console.log("받아온 채팅 리스트 데이터:", data);
        setShareData(data);
      });

    return () => {
      socket.off("메세지");
    };
  }, []);

  return <Tab shareData={shareData} togetherData={togetherData} />;
}
