import { useEffect } from "react";
import { usePathname } from "next/navigation";
import socket from "@/lib/socket";

export default function useChatSocket () {
  const pathname = usePathname();

  useEffect(() => {
    const inChatPage = pathname.startsWith("/chat");

    if (inChatPage && !socket.connected) {
      socket.connect();
    }

    if (!inChatPage && socket.connected) {
      socket.disconnect();
    }
  }, [pathname]);
};
