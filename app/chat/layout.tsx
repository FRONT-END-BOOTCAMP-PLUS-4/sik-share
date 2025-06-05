"use client";
import useSocket from "@/hooks/useSocket";

export default function ChatLayout({
  children,
}: { children: React.ReactNode }) {
  useSocket();
  return <>{children}</>;
}
