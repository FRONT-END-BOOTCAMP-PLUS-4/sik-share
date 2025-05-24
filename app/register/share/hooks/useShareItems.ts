"use client";

import { useEffect, useState } from "react";

type ShareItem = {
  id: number;
  name: string;
}

export default function useShareItmes() {
  const [shareItems, setShareItems] = useState<ShareItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchShareItems = async () => {
      try{
        const res = await fetch("/api/shareItems", {
          cache: "no-store"
        });
          
        if(!res.ok) throw new Error("나눔 항목 조회 실패");
        const {result} = await res.json();
        setShareItems(result);
      }
      catch(error){
        const message =
          error instanceof Error ? error.message : "다시 시도해주세요";

        setError(message);
      }
      finally{
        setLoading(false);
      }
    }

    fetchShareItems();
  }, []);

  return {
    shareItems,
    loading,
    error,
  };
}
