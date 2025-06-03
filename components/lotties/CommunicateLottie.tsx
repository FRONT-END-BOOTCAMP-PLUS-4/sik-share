"use client";

import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact),
  { ssr: false },
);

export default function CommunicateLottie() {
  return (
    <div className="absolute -top-10 -right-40 xs:-right-45 w-full">
      <DotLottieReact
        src="/assets/lotties/Communicate.lottie"
        width="150"
        height="150"
        loop
        autoplay
      />
    </div>
  );
}
