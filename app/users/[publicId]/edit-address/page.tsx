"use client";

import { useCallback, useState } from "react";
import KakaoMap from "@/components/common/KakaoMap";
import SubHeader from "@/components/common/SubHeader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function EditAddressPage() {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const [location, setLocation] = useState<{
    address: string;
    neighborhoodName: string;
  } | null>(null);

  const onSelect = useCallback((address: string, neighborhoodName: string) => {
    setLocation({ address, neighborhoodName });
  }, []);

  const onClick = async () => {
    if (!location) {
      alert("지도를 움직여 위치를 지정해주세요.");
      return;
    }

    if (status === "loading") return;

    if (status !== "authenticated") {
      router.replace("/login");
      return;
    }

    if (location.address.split(" ")[1] !== "관악구") {
      toast.error("식샤는 관악구에서만 가능합니다.");
      return;
    }

    const res = await fetch("/api/users/update/address", {
      method: "POST",
      body: JSON.stringify({
        userPublicId: session?.user.publicId,
        address: location.address,
        neighborhoodName: location.neighborhoodName,
      }),
    });

    const { success, message } = await res.json();

    if (success) {
      toast.success(message, {
        duration: 2000,
        onAutoClose: () => {
          router.back();
        },
      });
    } else {
      toast.error(message);
    }
  };

  return (
    <>
      <SubHeader
        DescTitleText={`변경 위치를
          선택해주세요.`}
        DescSubText="어디로 변경할까요? 식샤는 관악구에서만 가능해요."
      />
      <section className="h-[calc(100svh-227px)] flex flex-col">
        <KakaoMap onSelect={onSelect} />
        <div className="absolute bottom-0 z-50 w-full py-3 px-4 bg-white border-t-1 border-zinc-300">
          <Button variant="joinFullBtn" size="lg" onClick={onClick}>
            위치 선택 완료
          </Button>
        </div>
      </section>
    </>
  );
}
