"use client";

import { motion } from "motion/react";
import IntroLottie from "@/components/lotties/IntroLottie";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col justify-center items-center"
    >
      <IntroLottie />
      <div className="flex flex-col items-center gap-6 title-md !font-medium">
        <div className="flex flex-col items-center">
          <p>1인 가구를 위한</p>
          <p>식재료 공유 플랫폼</p>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <Button className="w-full">시작하기</Button>
          <Button className="w-full" variant="outline">
            이미 계정이 있습니다
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
