import {
	House,
	Salad,
	MapPinned,
	MessageCircle,
	CircleUserRound,
} from "lucide-react";

const navItems = [
	{ Icon: House, label: "홈" },
	{ Icon: Salad, label: "나눔함" },
	{ Icon: MapPinned, label: "동네지도" },
	{ Icon: MessageCircle, label: "채팅" },
	{ Icon: CircleUserRound, label: "나의 식샤" },
] as const;

export default function Footer() {
	return (
		<footer className="z-10 fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[var(--space-mobileMax)] flex justify-between items-center bg-white min-h-[var(--space-header)] px-4 py-2">
			<ul className="w-full flex justify-around items-center gap-[var(--space-footer)]">
				{navItems.map(({ Icon, label }) => (
					<li key={label} className="flex flex-col items-center cursor-pointer">
						<Icon />
						<p className="label-11">{label}</p>
					</li>
				))}
			</ul>
		</footer>
	);
}
