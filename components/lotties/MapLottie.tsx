"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function MapLottie() {
  return (
    <div className="absolute top-0 -left-20 w-full">
      <DotLottieReact src="/assets/lotties/Map.lottie" loop autoplay />
    </div>
  );
}
