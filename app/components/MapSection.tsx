"use client";

import { motion } from "motion/react";
import MapLottie from "@/components/lotties/MapLottie";
import { Button } from "@/components/ui/button";

export default function MapSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full flex justify-center items-center"
    >
      <MapLottie />
      <div className="absolute top-1/2 translate-y-1/2 right-15 flex flex-col title-md">
        <p>근처 이웃을</p>
        <p>찾아보세요!</p>
        <Button className="mt-4">시작하기</Button>
      </div>
    </motion.div>
  );
}
