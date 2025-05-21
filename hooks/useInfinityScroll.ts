import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface UseInfiniteScrollOptions<T> {
  fetcher: (page: number, itemsPerPage: number) => Promise<T[]>;
  itemsPerPage?: number;
  delay?: number;
}

export function useInfiniteScroll<T>({
  fetcher,
  itemsPerPage = 20,
  delay = 2000,
}: UseInfiniteScrollOptions<T>) {
  const [items, setItems] = useState<T[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const { ref, inView } = useInView({ threshold: 1.0 });

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      if (delay > 0) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      const newItems = await fetcher(page, itemsPerPage);
      if (newItems.length === 0) {
        setHasMore(false);
      }

      setItems((prev) => [...prev, ...newItems]);
      setPage((prev) => prev + 1);
    } finally {
      setLoading(false);
    }
  }, [fetcher, page, loading, hasMore, delay, itemsPerPage]);

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView, loadMore]);

  const reset = useCallback(() => {
    setItems([]);
    setPage(0);
    setHasMore(true);
  }, []);

  return { items, loading, hasMore, ref, reset };
}
