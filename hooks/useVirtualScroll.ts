import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

interface UseVirtualScrollProps {
  itemCount: number;
  itemHeight: number;
  overscan?: number;
}

export function useVirtualScroll({
  itemCount,
  itemHeight,
  overscan = 5,
}: UseVirtualScrollProps) {
  const parentRef = useRef<HTMLDivElement | null>(null);

  const virtualizer = useVirtualizer({
    count: itemCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemHeight,
    overscan,
  });

  return {
    parentRef,
    virtualItems: virtualizer.getVirtualItems(),
    totalHeight: virtualizer.getTotalSize(),
  };
}
