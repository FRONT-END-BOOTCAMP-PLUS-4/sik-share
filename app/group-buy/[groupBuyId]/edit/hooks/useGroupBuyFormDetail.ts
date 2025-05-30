import { HttpError } from '@/errors/HttpError';
import { useEffect, useState } from 'react';

type GroupBuyFormDetail = {
  title: string,
  description: string,
  lat: number,
  lng: number,
  neighborhoodName: string,
  locationNote: string,
  capacity: number,
  desiredItem: string,
  meetingDate: Date,
  images: string[],
}

export default function useGroupBuyFormDetail(groupBuyId: number){
  const [groupBuyFormDetail, setGroupBuyFormDetail] = useState<GroupBuyFormDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchGroupBuyFormDetail = async () => {
      try {
        const res = await fetch(`/api/group-buys/${groupBuyId}/edit`, {
          cache: "no-store",
        });

        if (res.status === 403) {
          throw new HttpError(403, "접근 권한이 없습니다");
        }

        if (res.status === 404) {
          throw new HttpError(404, "존재하지 않는 나눔입니다");
        }

        const { result } = await res.json();
        setGroupBuyFormDetail(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGroupBuyFormDetail();
  }, [groupBuyId]);

  return {
    groupBuyFormDetail,
    loading,
    error,
  };
}