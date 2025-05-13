"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function CommunicateLottie() {
  return (
    <div className="absolute -top-10 -right-50 w-full">
      <DotLottieReact
        src="/assets/lotties/Communicate.lottie"
        width={200}
        height={200}
        loop
        autoplay
      />
    </div>
  );
}
