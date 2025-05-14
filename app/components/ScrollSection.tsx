"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import CartLottie from "@/components/lotties/CartLottie";

export default function ScrollSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const offset = 250;
  const char1X = useTransform(scrollYProgress, [0, 1], [0, offset]);
  const char2X = useTransform(scrollYProgress, [0, 1], [0, -offset]);

  return (
    <section ref={ref} className="relative h-[80vh] -mt-[50px] bg-white">
      <div className="flex flex-col text-center gap-2">
        <p className="title-md">같이 장보기</p>
        <div className="body-md !font-light !leading-none text-zinc-400">
          <p>주변 이웃과 같이 장보며</p>
          <p>따뜻함을 나눠요</p>
        </div>
      </div>
      <motion.div style={{ x: char1X }} className="absolute top-40 left-0">
        <CartLottie />
      </motion.div>

      <motion.div style={{ x: char2X }} className="absolute top-60 right-0">
        <div className="scale-x-[-1]">
          <CartLottie />
        </div>
      </motion.div>
    </section>
  );
}
