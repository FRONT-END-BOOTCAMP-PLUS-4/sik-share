"use client";
import { motion } from "framer-motion";
import LoadingLottie from "../lotties/LoadingLottie";

export default function Loading({ children }: { children?: React.ReactNode }) {
  return (
    <section className="flex justify-center items-center h-dvh">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        <LoadingLottie />
        <motion.p
          animate={{ y: [0, -5, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="body-md text-center"
        >
          {children || "나눔받은 식재료로 요리하는 중..."}
        </motion.p>
      </motion.div>
    </section>
  );
}
