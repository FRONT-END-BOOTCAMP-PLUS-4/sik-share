"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LayoutLottie() {
  return (
    <div>
      <DotLottieReact
        className="w-full"
        src="/assets/lotties/Layout.lottie"
        loop
        autoplay
      />
    </div>
  );
}
