// app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "./globals.css";
import IntroLottie from "@/components/lotties/IntroLottie";

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
        <div className="flex px-10">
          <section className="hidden lg:flex flex-col justify-center w-[40%] title-lg mb-[200px]">
            <div className="flex flex-col items-end">
              <div className="flex flex-col justify-between items-center space-y-4">
                <IntroLottie />
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
              </div>
            </div>
          </section>

          <section className="relative safe-container w-[60%] min-h-screen mx-auto max-w-[var(--space-mobileMax)] bg-white border-t border-x border-zinc-300">
            <Header />
            <main className="px-4 pb-16">{children}</main>
            <Footer />
          </section>
        </div>
      </body>
    </html>
  );
}
