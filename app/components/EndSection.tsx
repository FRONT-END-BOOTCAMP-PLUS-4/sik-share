"use client";

import { useEffect, useState } from "react";
import { Handshake, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import { useCountUp } from "@/hooks/useCountUp";

export default function EndSection() {
  const [shareCount, setShareCount] = useState<number | null>(null);
  const [groupBuyCount, setGroupBuyCount] = useState<number | null>(null);
  const [startCount, setStartCount] = useState(false);

  const stats = [
    { id: 1, label: "식재료 나눔", value: shareCount },
    { id: 2, label: "같이 장보기", value: groupBuyCount },
  ];

  useEffect(() => {
    fetch("/api/shares/count")
      .then((res) => res.json())
      .then((data) => setShareCount(data.count))
      .catch(() => setShareCount(0));

    fetch("/api/group-buys/count")
      .then((res) => res.json())
      .then((data) => setGroupBuyCount(data.count))
      .catch(() => setGroupBuyCount(0));
  }, []);

  return (
    <section className="pb-24 -mt-[100px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 1 }}
        onViewportEnter={() => setStartCount(true)}
        onViewportLeave={() => setStartCount(false)}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full flex flex-col justify-center items-center"
      >
        <div className="flex flex-col items-center gap-6 title-md !font-medium">
          <div className="flex flex-col items-center">
            <p>주변 이웃들은</p>
            <p className="!text-warning">이만큼 활동했어요</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {stats.map(({ id, label, value }) => {
              const count = useCountUp(value ?? 0, startCount, 1);

              return (
                <div
                  key={id}
                  className="flex flex-col justify-center items-center rounded-lg shadow-sm p-6 w-40 hover:shadow-lg transition-shadow duration-200"
                >
                  {id === 1 ? (
                    <Handshake size={30} />
                  ) : (
                    <ShoppingCart size={30} />
                  )}
                  <p className="title-md mt-2 mb-4">{label}</p>
                  <p className="body-md">{count.toLocaleString()}건</p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
