"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function LoadingFoodLottie() {
  return (
    <div className="w-50 h-50 m-auto">
      <DotLottieReact src="/assets/lotties/loadingFood.lottie" loop autoplay />
    </div>
  );
}
