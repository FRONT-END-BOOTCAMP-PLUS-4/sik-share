"use client";

import { motion } from "motion/react";
import MapLottie from "@/components/lotties/MapLottie";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MapSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full h-[25vh] flex justify-center items-center"
    >
      <MapLottie />
      <div className="absolute right-15 flex flex-col title-md">
        <p>근처 이웃을</p>
        <p>찾아보세요!</p>
        <Link href="/map">
          <Button className="mt-4">시작하기</Button>
        </Link>
      </div>
    </motion.div>
  );
}
