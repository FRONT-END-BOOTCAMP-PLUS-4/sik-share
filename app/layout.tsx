import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

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
				<div className="safe-container w-full min-h-screen mx-auto max-w-[var(--space-mobileMax)] bg-white border-zinc-400">
					<Header />
					<div className="px-4">{children}</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
