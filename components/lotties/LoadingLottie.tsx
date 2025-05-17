"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LoadingLottie() {
  return (
    <div className="w-50 h-50">
      <DotLottieReact src="/assets/lotties/loading.lottie" loop autoplay />
    </div>
  );
}
