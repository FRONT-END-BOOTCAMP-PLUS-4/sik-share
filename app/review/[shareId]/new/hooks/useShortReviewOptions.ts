'use client';

import { useEffect, useState } from 'react';

type shortReviewOption = {
  id: number;
  content : string;
}

export default function useShortReviewOptions(){
  const [shortReviewOptions, setShortReviewOptions] = useState<shortReviewOption[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string| null> (null);

  useEffect(()=> {
    const fetchShortReviewOptions = async () => {
      try{
        const res = await fetch("/api/short-review-options");

        if(!res.ok) throw new Error("한줄평 보기 조회 실패");

        const { result } = await res.json();
        setShortReviewOptions(result);
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

    fetchShortReviewOptions();
  }, []);

  return {
    shortReviewOptions,
    loading,
    error
  }
}