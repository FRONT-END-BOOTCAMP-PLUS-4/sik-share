"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import IntroLottie from "@/components/lotties/IntroLottie";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full flex flex-col justify-center items-center"
      >
        <IntroLottie />
        <div className="flex flex-col items-center gap-6 title-md !font-medium w-full">
          <div className="flex flex-col items-center">
            <p>1인 가구를 위한</p>
            <p>식재료 공유 플랫폼</p>
          </div>
          <div className="flex flex-col items-center gap-1.5 w-full">
            <Button className="w-2/5" onClick={() => router.push("/map")}>
              시작하기
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
