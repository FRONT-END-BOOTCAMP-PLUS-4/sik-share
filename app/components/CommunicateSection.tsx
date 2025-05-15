"use client";

import { motion } from "motion/react";
import CommunicateLottie from "@/components/lotties/CommunicateLottie";

export default function CommunicateSection() {
  return (
    <section className="mt-24 sm:mt-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full h-[25vh] flex justify-center items-center"
      >
        <div className="absolute top-0 left-10 flex flex-col title-md">
          <div className="flex flex-col gap-2">
            <p className="title-md">이웃과 소통하기</p>
            <div className="flex flex-col body-md !font-light !leading-none text-zinc-400">
              <p>서로 남는 식재료를 나누고</p>
              <p>소소하게 친목을 쌓아요</p>
            </div>
          </div>
          <CommunicateLottie />
        </div>
      </motion.div>
    </section>
  );
}
