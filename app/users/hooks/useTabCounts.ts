import { useEffect, useState } from "react";

interface UseTabCountsOptions {
  publicId: string;
  type: "share" | "group-buy" | "participation";
  tabType: "status" | "participation";
}

export function useTabCounts({ publicId, type, tabType }: UseTabCountsOptions) {
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
