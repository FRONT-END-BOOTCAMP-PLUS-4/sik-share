import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "./globals.css";
import RobotLottie from "@/components/lotties/RobotLottie";

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
      <body suppressHydrationWarning>
        <div className="flex">
          <section className="hidden lg:flex flex-col justify-center w-[40%] title-lg mb-[150px]">
            <div className="flex flex-col items-end">
              <div className="flex flex-col justify-between items-center space-y-4">
                <div className="flex flex-col items-center text-2xl font-bold leading-snug">
                  <div className="flex items-center">
                    <p>까다로운&nbsp;</p>
                    <span className="relative inline-block">
                      <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 space-x-2">
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                      </span>
                      <span className="text-primary">식재료</span>
                    </span>
                    <p>&nbsp;관리</p>
                  </div>
                  <div className="flex">
                    <p>이제&nbsp;</p>
                    <p className="text-primary">식샤</p>
                    <p>와 함께 공유하세요!</p>
                  </div>
                </div>
                <RobotLottie />
              </div>
            </div>
          </section>

          <section className="relative safe-container w-full min-h-screen mx-auto  bg-white border-t border-x border-zinc-300 max-w-[var(--space-mobileMax)]">
            <Header />
            <main className="md:w-full">{children}</main>
            <div className="h-auto" id="drawer-customPortal" />
            <Footer />
          </section>
        </div>
      </body>
    </html>
  );
}
