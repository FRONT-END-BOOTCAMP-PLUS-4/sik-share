"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="z-10 sticky top-0 flex justify-between items-center bg-white min-h-[var(--h-header)] px-4 py-2">
			<Link href="/">
				<Image src="/assets/logo.png" alt="logo" width={55} height={36} />
			</Link>

			{/* <Image
				src="/assets/images/lucide/bell.svg"
				width={24}
				height={24}
				alt="알람 없을 때 아이콘"
			/> */}
			<Image
				src="/assets/images/lucide/bell-dot.svg"
				width={24}
				height={24}
				alt="알람 있을 때 아이콘"
			/>
		</header>
	);
}
