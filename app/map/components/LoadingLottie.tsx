"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function LoadingLottie() {
  return (
    <div className="w-50 h-50 m-auto">
      <DotLottieReact src="/assets/lotties/loadingFood.lottie" loop autoplay />
    </div>
  );
}
