import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

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

  const loadMore = useCallback(
    async (currentSignal: number) => {
      if (loading || !hasMore) return;
      setLoading(true);

      try {
        if (delay > 0) await new Promise((res) => setTimeout(res, delay));

        const newItems = await fetcher(page, itemsPerPage);

        if (newItems.length === 0) {
          setHasMore(false);
        }
        
        if (resetSignal.current === currentSignal) {
          setItems((prev) => [...prev, ...newItems]);
          setPage((prev) => prev + 1);

          if (newItems.length < itemsPerPage) {
            setHasMore(false);
          }
        }
      } finally {
        setLoading(false);
      }
    },
    [fetcher, page, loading, hasMore, delay, itemsPerPage],
  );

  useEffect(() => {
    if (inView) {
      loadMore(resetSignal.current);
    }
  }, [inView, loadMore]);

  useEffect(() => {
    resetSignal.current += 1;
    setItems([]);
    setPage(0);
    setHasMore(true);
  }, deps);

  return {
    items,
    loading,
    hasMore,
    ref,
  };
}
