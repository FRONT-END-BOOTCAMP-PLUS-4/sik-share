"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useSession } from 'next-auth/react';

const reasonMap: Record<string, string> = {
  NOT_FOUND: "존재하지 않는 나눔입니다.",
  NOT_MATCHED: "아직 성사되지 않은 나눔입니다.",
  ALREADY_WRITTEN: "이미 후기를 작성하셨습니다.",
};

export default function useValidateReviewWritable(
  shareId: number,
  writerId: string | undefined,
) {
  const [recipientId, setRecipientId] = useState<string | null>(null);
  const [recipientNickname, setRecipientNickname] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const {data : session} = useSession();

  useEffect(() => {
    if (!shareId || !writerId) {
      setLoading(false);
      return;
    }

    const validate = async () => {
      try{
        const res = await fetch(`/api/reviews/validate?shareId=${shareId}&writerId=${writerId}`);

        const result = await res.json();

        if(!res.ok || result.canWrite === false){
          const message = result.reason && reasonMap[result.reason] || result.message || "후기를 작성할 수 없습니다.";
          toast.error(message);
          router.replace(`/users/${session?.user.publicId}/participations`);
          return;
        }

        setRecipientId(result.recipientId);
        setRecipientNickname(result.recipientNickname);
      }
      catch(error){
        toast.error("페이지 로드 중 문제가 발생했습니다. 다시 시도해주세요.");
        router.replace(`/users/${session?.user.publicId}/participations`);
      }
      finally{
        setLoading(false);
      }
    }

    validate();
  }, [shareId, writerId, router, session]);

  return {
    recipientId,
    recipientNickname,
    loading,
  }
}
