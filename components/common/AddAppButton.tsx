"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

const ONE_DAY = 1000 * 60 * 60 * 24;

export default function AddToHomeScreenBanner() {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const dismissedAt = localStorage.getItem("a2hs-dismissed-at");
    if (dismissedAt && Date.now() - Number(dismissedAt) < ONE_DAY) {
      return;
    }

    const isIosDevice = /iphone|ipad|ipod/.test(
      window.navigator.userAgent.toLowerCase(),
    );
    const isInStandalone =
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      "standalone" in window.navigator && (window.navigator as any).standalone;

    if (isIosDevice && !isInStandalone) {
      setIsIOS(true);
      setShowBanner(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    if (result.outcome === "accepted") {
      console.log("사용자가 설치를 수락함");
    }
    setShowBanner(false);
  };

  const handleClose = () => {
    localStorage.setItem("a2hs-dismissed-at", Date.now().toString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-[70px] left-1/2 -translate-x-1/2 bg-white border border-gray-300 shadow-xl rounded-lg p-4 z-50 flex flex-col items-center max-w-xs w-full">
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button
        onClick={handleClose}
        className="text-xs text-gray-500 p-2 absolute right-2 top-2"
      >
        <X size={14} />
      </button>
      <p className="text-sm text-gray-700 mt-4 mb-2">
        {isIOS ? (
          <>
            이 앱을 홈 화면에 추가하려면
            <br />
            공유 버튼을 누르고 <strong>'홈 화면에 추가'</strong>를 선택하세요.
          </>
        ) : (
          "앱 설치 없이 바로 실행할 수 있어요!"
        )}
      </p>
      {!isIOS && (
        // biome-ignore lint/a11y/useButtonType: <explanation>
        <button
          onClick={handleInstallClick}
          className="bg-primary text-white px-3 py-1 rounded-md text-sm"
        >
          홈 화면에 추가하기
        </button>
      )}
    </div>
  );
}
