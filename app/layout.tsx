import type { Metadata } from "next";
import "./globals.css";
import RobotLottie from "@/components/lotties/RobotLottie";
import { SessionProvider } from "@/components/common/SessionProvider";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "함께 나누는 따뜻한 식생활",
  description: "식샤와 함께 나누어봐요",
  openGraph: {
    title: "식샤 그룹모임에 함께해요!",
    description: "근처 이웃과 식재료를 나누어요!",
    url: "http://localhost:3000",
    images: [
      {
        url: "http://localhost:3000/favicon.ico",
        width: 300,
        height: 300,
        alt: "식샤 썸네일",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning>
        <SessionProvider>
          <div className="flex items-center">
            <section className="hidden lg:flex justify-center fixed top-1/2 left-0 w-1/3 transform -translate-y-1/2">
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
              <main className="md:w-full">{children}</main>
              <div className="h-auto" id="drawer-customPortal" />
              <Toaster position="bottom-center" richColors />
            </section>
          </div>

          <Script
            type="text/javascript"
            src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services,clusterer&autoload=false`}
            strategy="beforeInteractive"
          />
          <Script
            src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.5/kakao.min.js"
            // integrity="sha384-dok87au0gKqJdxs7msEdBPNnKSRT+/mhTVzq+qOhcL464zXwvcrpjeWvyj1kCdq6"
          />
        </SessionProvider>
      </body>
    </html>
  );
}
