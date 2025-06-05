"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function IntroLottie() {
  return (
    <div className="mt-10">
      <DotLottieReact
        src="/assets/lotties/Ingredient.lottie"
        loop
        autoplay
        speed={0.5}
      />
    </div>
  );
}
