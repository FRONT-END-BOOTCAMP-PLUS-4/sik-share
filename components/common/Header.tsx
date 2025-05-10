import { BellDot } from "lucide-react";
import Image from "next/image";

export default function Header() {
	return (
		<header className="z-10 sticky top-0 flex justify-between items-center bg-white min-h-[var(--h-header)] px-4 py-2">
			<Image src="/assets/logo.png" alt="logo" width={55} height={36} />
			<BellDot className="cursor-pointer" />
		</header>
	);
}
