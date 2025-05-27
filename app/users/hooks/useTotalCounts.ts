import { useEffect, useState } from "react";

interface useTotalCountsProps {
  publicId: string;
  type: "share" | "group-buy" | "participation" | "review";
  tabType: "status" | "participation" | "review";
}

export function useTotalCounts({ publicId, type, tabType }: useTotalCountsProps) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await fetch(
          `/api/users/history-count?publicId=${publicId}&type=${type}&tabType=${tabType}`
        );
        const data = await res.json();
        setCounts(data.result);
      } catch (error) {
        console.error("Failed to fetch tab counts", error);
      };
    };

    if (publicId) {
      fetchCounts();
    }
  }, [publicId, type, tabType]);

  return { counts };
}
