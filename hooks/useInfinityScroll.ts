import { useState, useEffect, useRef, useCallback } from "react";

interface UseInfiniteScrollProps<T> {
  fetcher: (page: number) => Promise<T[]>;
  itemsPerPage?: number;
  maxItems?: number;
}

export function useInfiniteScroll<T>({
  fetcher,
  itemsPerPage = 20,
  maxItems = 100,
}: UseInfiniteScrollProps<T>) {
  const [items, setItems] = useState<T[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newItems = await fetcher(page);
      if (
        newItems.length === 0 ||
        items.length + newItems.length >= maxItems
      ) {
        setHasMore(false);
      }

      setItems((prev) => [
        ...prev,
        ...newItems.slice(0, maxItems - prev.length),
      ]);
      setPage((prev) => prev + 1);
    } finally {
      setLoading(false);
    }
  }, [fetcher, page, loading, hasMore, items.length, maxItems]);

  useEffect(() => {
    loadMore();
  }, [loadMore]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const scrolledRatio = el.scrollTop / (el.scrollHeight - el.clientHeight);
      
      if (scrolledRatio >= 0.99) {
        loadMore();
      }
    };
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [loadMore]);

  const reset = () => {
    setItems([]);
    setPage(0);
    setHasMore(true);
  };

  return { items, loading, hasMore, containerRef, reset };
}
