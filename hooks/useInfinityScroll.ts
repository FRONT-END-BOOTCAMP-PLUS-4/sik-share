import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
// import throttle from "lodash.throttle";

interface UseInfiniteScrollOptions<T> {
  fetcher: (page: number, itemsPerPage: number) => Promise<T[]>;
  itemsPerPage?: number;
  delay?: number;
  deps?: ReadonlyArray<string | number | null>;
}

export function useInfiniteScroll<T>({
  fetcher,
  itemsPerPage = 20,
  delay = 2000,
  deps = [],
}: UseInfiniteScrollOptions<T>) {
  const [items, setItems] = useState<T[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const resetSignal = useRef(0);

  const { ref, inView } = useInView({ threshold: 0.3 });

  const throttledLoadMoreRef = useRef<((signal: number) => void) & { cancel?: () => void }>(null);

  useEffect(() => {
    throttledLoadMoreRef.current = throttle(async (signal: number) => {
      if (loading || !hasMore) return;
      setLoading(true);

      try {
        if (delay > 0) await new Promise((res) => setTimeout(res, delay));

        const newItems = await fetcher(page, itemsPerPage);

        if (resetSignal.current === signal) {
          setItems((prev) => [...prev, ...newItems]);
          setPage((prev) => prev + 1);

          if (newItems.length < itemsPerPage) {
            setHasMore(false);
          }
        }
      } finally {
        setLoading(false);
      }
    }, 1000);

    return () => {
      throttledLoadMoreRef.current?.cancel?.();
    };
  }, [loading, hasMore, page, itemsPerPage, delay, fetcher]);

  useEffect(() => {
    if (inView) {
      throttledLoadMoreRef.current?.(resetSignal.current);
    }
  }, [inView]);

  useEffect(() => {
    resetSignal.current += 1;
    setItems([]);
    setPage(0);
    setHasMore(true);
    setTimeout(() => {
      throttledLoadMoreRef.current?.(resetSignal.current);
    }, 0);
  }, deps);

  return {
    items,
    loading,
    hasMore,
    ref,
  };
}
