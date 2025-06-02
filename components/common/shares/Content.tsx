"use client";

import { Salad, ClockFading } from "lucide-react";
import { useState } from "react";

export interface ContentProps {
  shareItem: string;
  remainingHours: string;
  description: string;
}

export default function Content({
  shareItem,
  remainingHours,
  description,
}: ContentProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mx-auto w-full max-w-sm mt-2 mb-2">
      <div className="flex justify-center items-start flex-col gap-2">
        <div className="flex flex-row justify-center items-start text-center gap-1 text-zinc-500">
          <Salad size={16} strokeWidth={1} />
          <p className="caption">{shareItem}</p>
        </div>
        <div className="flex flex-row justify-center items-start text-center gap-1 text-zinc-500">
          <ClockFading size={16} strokeWidth={1} />
          <p className="caption">
            <span className="text-[var(--warning)]">{remainingHours}</span>
            시간 남음
          </p>
        </div>
        <div className="w-full">
          <div
            className={
              expanded ? "h-auto" : "h-[50px] line-clamp-2 overflow-hidden"
            }
          >
            <span className="body-md">{description}</span>
          </div>

          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-1 text-sm text-zinc-500 underline"
          >
            {expanded ? "간략히 보기" : "더보기"}
          </button>
        </div>
      </div>
    </div>
  );
}
