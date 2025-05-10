import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "./globals.css";

export const metadata: Metadata = {
	title: "함께 나누는 따뜻한 식생활",
	description: "식샤와 함께 나누어봐요",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body>
				<div className="safe-container w-full min-h-screen mx-auto max-w-[var(--space-mobileMax)] bg-white border-t border-x border-zinc-300">
					<Header />
					<main className="px-4 pb-16">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
