"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function FoodLottie() {
  return (
    <div className="w-[200px] h-[100px] sm:w-auto sm:h-auto">
      <DotLottieReact src="/assets/lotties/Food.lottie" loop autoplay />
    </div>
  );
}
