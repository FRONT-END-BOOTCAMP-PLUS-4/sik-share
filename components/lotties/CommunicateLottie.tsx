"use client";

// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact),
  { ssr: false },
);

export default function CommunicateLottie() {
  return (
    <div className="absolute -top-10 -right-50 w-full">
      <DotLottieReact
        src="/assets/lotties/Communicate.lottie"
        width="200"
        height="200"
        loop
        autoplay
      />
    </div>
  );
}
