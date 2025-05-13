"use client";

import { motion } from "motion/react";
import RobotLottie from "@/components/lotties/RobotLottie";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col justify-center items-center gap-3"
    >
      <RobotLottie />
      <div className="flex flex-col items-center gap-5">
        <p className="title-md">흠..</p>
      </div>
    </motion.div>
  );
}
