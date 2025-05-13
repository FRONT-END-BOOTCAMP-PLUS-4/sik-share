"use client";

import { motion } from "motion/react";
import MapLottie from "@/components/lotties/MapLottie";

export default function MapSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full h-[25vh] flex justify-center items-center"
    >
      <MapLottie />
      <div className="absolute right-15 flex flex-col gap-2 title-md">
        <div>
          <p>근처 이웃을</p>
          <p>찾아보세요!</p>
        </div>
        <div className="flex flex-col body-md !font-light !leading-none text-zinc-400">
          <p>내 주변에 어떤 이웃이</p>
          <p>활동 중인지 확인해요</p>
        </div>
      </div>
    </motion.div>
  );
}
