"use client";

import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact),
  { ssr: false },
);

export default function CartLottie() {
  return (
    <div className="-mt-10">
      <DotLottieReact
        src="/assets/lotties/Cart.lottie"
        className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]"
        speed={0.7}
        loop
        autoplay
      />
    </div>
  );
}
