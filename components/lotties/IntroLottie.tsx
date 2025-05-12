"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function IntroLottie() {
  return (
    <>
      <div className="mt-10">
        <DotLottieReact
          className="w-full"
          src="/assets/lotties/Intro.lottie"
          loop
          autoplay
        />
      </div>
    </>
  );
}
