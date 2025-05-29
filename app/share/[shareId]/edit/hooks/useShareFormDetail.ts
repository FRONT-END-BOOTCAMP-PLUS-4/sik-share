'use client';

import { HttpError } from '@/errors/HttpError';
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

export default function useShareFormDetail(shareId: number) {
  const [shareFormDetail, setShareFormDetail] = useState<ShareFormDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchShareFormDetail = async () => {
      try {
        const res = await fetch(`/api/shares/${shareId}/edit`, {
          cache: "no-store",
        });

        if (res.status === 403) {
          throw new HttpError(403, "접근 권한이 없습니다");
        }

        if (res.status === 404) {
          throw new HttpError(404, "존재하지 않는 나눔입니다");
        }

        const { result } = await res.json();
        setShareFormDetail(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchShareFormDetail();
  }, [shareId]);

  return {
    shareFormDetail,
    loading,
    error,
  };
}
