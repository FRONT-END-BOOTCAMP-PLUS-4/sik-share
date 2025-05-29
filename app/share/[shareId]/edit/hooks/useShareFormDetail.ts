'use client';

import { useEffect, useState } from 'react';

type ShareFormDetail = {
  shareItem: string;
  title: string;
  description: string;
  neighborhoodName: string;
  locationNote: string;
  lat: number;
  lng: number;
  images: string[];
};

export default function useShareFormDetail(shareId: number){
  const [shareFormDetail, setShareFormDetail] = useState<ShareFormDetail | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(()=> {
    const fetchShareFormDetail = async ()=> {
      try{
        const res = await fetch(`/api/shares/${shareId}/edit`, {
          cache: "no-store"
        });

        if(!res.ok){
          const { message } = await res.json();
          throw new Error(message);
        }

        const { result } = await res.json();
        setShareFormDetail(result);
      }
      catch(error){
        const message = error instanceof Error ? error.message : "다시 시도해주세요";
        setError(message);
      }
      finally{
        setLoading(false);
      }
    }

    fetchShareFormDetail();
  }, [shareId]);

  return {
    shareFormDetail,
    loading,
    error
  }
}