"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function ForbiddenLottie() {
  return (
    <div className="-mt-[100px]">
      <DotLottieReact
        src="/assets/lotties/Forbidden.lottie"
        className="w-[200px] h-[200px]"
        speed={1.3}
        loop
        autoplay
      />
    </div>
  );
}
