"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  House,
  Salad,
  MapPinned,
  MessageCircle,
  CircleUserRound,
} from "lucide-react";
import { useSession } from "next-auth/react";
import DropdownButton from "./DropdownButton";

const navItems = [
  { key: "", Icon: House, label: "홈" },
  { key: "share-box", Icon: Salad, label: "나눔함" },
  { key: "map", Icon: MapPinned, label: "동네지도" },
  { key: "chat", Icon: MessageCircle, label: "채팅" },
  { key: "users", Icon: CircleUserRound, label: "나의 식샤" },
] as const;

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  const current = pathname?.split("/")[1] ?? navItems[0].key;
  const activeTab =
    navItems.find((item) => item.key === current)?.key ?? navItems[0].key;

  const handleClick = (key: string) => {
    if (key === "users") {
      if (status === "loading") return;
      if (status === "unauthenticated") {
        router.push("/login");
        return;
      }
      router.push(`/users/${session?.user.publicId}`);
    } else if (key === "share-box") {
      if (status === "loading") return;
      if (status === "unauthenticated") {
        router.push("/login");
        return;
      }
      router.push(`/share-box/${session?.user.publicId}`);
    } else {
      router.push(`/${key}`);
    }
  };

  const options = [
    {
      id: "group-buy",
      label: "같이 장보기",
      onClick: () => {
        router.push("/register/group-buy");
      },
    },
    {
      id: "share",
      label: "나눔",
      onClick: () => {
        router.push("/register/share");
      },
    },
  ];

  return (
    <footer className="z-10 fixed bottom-0 mx-auto w-full max-w-[var(--space-mobileMax)] sm:max-w-[calc(var(--space-mobileMax)-2px)]  bg-white flex justify-around items-center min-h-[var(--space-header)] px-4 py-2 shadow-[var(--bottom-nav-shadow)]">
      {navItems.map(({ key, Icon, label }) => {
        const isActive = key === activeTab;
        const activeClass = isActive ? "text-primary font-bold" : "";

        return (
          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <div
            key={key}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleClick(key)}
          >
            <Icon className={`${activeClass}`} />
            <span className={`${activeClass} label`}>{label}</span>
          </div>
        );
      })}
      {current === "map" && (
        <div className="absolute bottom-20 right-4 z-50">
          <DropdownButton options={options} type="register" align="top" />
        </div>
      )}
    </footer>
  );
}
