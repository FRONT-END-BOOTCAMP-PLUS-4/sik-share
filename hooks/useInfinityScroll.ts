import { useEffect, useRef, useState } from "react";

export function useInfiniteScroll(loadMore: () => Promise<void>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current || loading) return;

      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

      // 스크롤이 바닥에 가까워졌을 때
      if (scrollHeight - scrollTop <= clientHeight + 50) {
        setLoading(true);
        loadMore().finally(() => setLoading(false));
      }
    };

    const el = containerRef.current;
    el?.addEventListener("scroll", onScroll);

    return () => {
      el?.removeEventListener("scroll", onScroll);
    };
  }, [loadMore, loading]);

  return { containerRef, loading };
}
