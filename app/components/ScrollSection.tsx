"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import CartLottie from "@/components/lotties/CartLottie";
import FoodLottie from "@/components/lotties/FoodLottie";

export default function ScrollSection() {
  const [containerReady, setContainerReady] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = document.getElementById("scroll-container");
    if (el) {
      containerRef.current = el;
      setContainerReady(true);
    }
  }, []);

  const { scrollYProgress } = useScroll(
    containerReady
      ? {
          container: containerRef,
          target: ref,
          offset: ["start end", "end start"],
        }
      : {},
  );

  const offset = 250;
  const char1X = useTransform(scrollYProgress, [0, 1], [0, offset]);
  const char2X = useTransform(scrollYProgress, [0, 1], [0, -offset]);

  const oldOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 0.45, 1],
    [1, 1, 0, 0],
  );
  const newOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 0.45, 1],
    [0, 0, 1, 1],
  );

  return (
    <section ref={ref} className="relative h-[40vh] -mt-[50px] bg-white">
      <div className="flex flex-col text-center gap-2">
        <p className="title-md">같이 장보기</p>
        <div className="body-md !font-light !leading-none text-zinc-400">
          <p>주변 이웃과 같이 장보며</p>
          <p>따뜻함을 나눠요</p>
        </div>
      </div>

      {/* 기존 CartLottie */}
      <motion.div
        style={{ x: char1X, opacity: oldOpacity }}
        className="absolute top-40 left-0"
      >
        <CartLottie />
      </motion.div>
      <motion.div
        style={{ x: char2X, opacity: oldOpacity }}
        className="absolute top-60 right-0"
      >
        <div className="scale-x-[-1]">
          <CartLottie />
        </div>
      </motion.div>

      {/* 스크롤 일정 수치 이상 시 등장 */}
      <motion.div
        style={{ opacity: newOpacity }}
        className="absolute inset-0 flex justify-center items-start mt-30"
      >
        <FoodLottie />
      </motion.div>
    </section>
  );
}
