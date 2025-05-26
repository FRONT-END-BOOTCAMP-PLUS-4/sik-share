"use client";

import { useEffect, useState } from "react";

export default function useKakaoReady(): boolean {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 이미 로드된 경우
    if (window?.kakao?.maps?.Map) {
      setIsReady(true);
      return;
    }

    // load 함수가 있으면 수동 로드
    window?.kakao?.maps?.load?.(() => {
      setIsReady(true);
    });
  }, []);

  return isReady;
}
