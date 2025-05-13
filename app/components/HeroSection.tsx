"use client";

import { motion } from "motion/react";
import IntroLottie from "@/components/lotties/IntroLottie";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col justify-center items-center"
    >
      <IntroLottie />
      <div className="flex flex-col items-center title-md !font-medium">
        <p>1인 가구를 위한</p>
        <p>식재료 공유 플랫폼</p>
      </div>
    </motion.div>
  );
}
