"use client";

import { usePathname, useRouter } from "next/navigation";
import {
	House,
	Salad,
	MapPinned,
	MessageCircle,
	CircleUserRound,
} from "lucide-react";

const navItems = [
	{ key: "", Icon: House, label: "홈" },
	{ key: "share", Icon: Salad, label: "나눔함" },
	{ key: "map", Icon: MapPinned, label: "동네지도" },
	{ key: "chat", Icon: MessageCircle, label: "채팅" },
	{ key: "profile", Icon: CircleUserRound, label: "나의 식샤" },
] as const;

export default function Footer() {
	const pathname = usePathname();
	const router = useRouter();

	const current = pathname?.slice(1) ?? navItems[0].key;
	const activeTab =
		navItems.find((item) => item.key === current)?.key ?? navItems[0].key;

	const handleClick = (key: string) => {
		router.push(`/${key}`);
	};

	return (
		<footer className="z-10 fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[var(--space-mobileMax)] bg-white flex justify-around items-center min-h-[var(--space-header)] px-4 py-2">
			{navItems.map(({ key, Icon, label }) => {
				const isActive = key === activeTab;
				const colorClass = isActive ? "text-primary" : "";

				return (
					// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
					<div
						key={key}
						className="flex flex-col items-center cursor-pointer"
						onClick={() => handleClick(key)}
					>
						<Icon className={`${colorClass} w-6 h-6`} />
						<span className={`${colorClass} label`}>{label}</span>
					</div>
				);
			})}
		</footer>
	);
}
