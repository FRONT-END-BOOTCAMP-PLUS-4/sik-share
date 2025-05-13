"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function RobotLottie() {
  return (
    <div>
      <DotLottieReact
        className="w-full"
        src="/assets/lotties/Robot.lottie"
        loop
        autoplay
      />
    </div>
  );
}
