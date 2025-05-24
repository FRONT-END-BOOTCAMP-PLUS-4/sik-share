"use client";
import useSocket from "@/app/hooks/useSocket";

export default function ChatLayout({
  children,
}: { children: React.ReactNode }) {
  useSocket();
  return <>{children}</>;
}
