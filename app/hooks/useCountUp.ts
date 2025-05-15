import { useState, useEffect } from "react";

/**
 * @param end 목표 숫자
 * @param start 애니메이션 시작 여부
 * @param duration 지속 시간(초)
 * @returns 현재 카운트 값
 */

export function useCountUp(end: number, start: boolean, duration = 1): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };

    const rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [start, end, duration]);

  return count;
}
