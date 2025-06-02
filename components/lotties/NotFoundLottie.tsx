"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function NotFoundLottie() {
  return (
    <div>
      <DotLottieReact
        src="/assets/lotties/NotFound.lottie"
        className="w-[200px] h-[200px]"
        speed={1.3}
        loop
        autoplay
      />
    </div>
  );
}
