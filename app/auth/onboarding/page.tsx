"use client";

import { useCallback, useState } from "react";
import KakaoMap from "./components/KakaoMap";
import SubHeader from "@/components/common/SubHeader";
import ButtonSection from "./components/ButtonSection";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function OnboardingPage() {
  const { data: session, status } = useSession();
  const { setPublicId, setAccessToken } = useAuthStore();
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

    if (status !== "authenticated") {
      router.replace("/login");
      return;
    }

    try {
      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: session?.user.email,
          nickname: session?.user.nickname,
          address: location.address,
          neighborhoodName: location.neighborhoodName,
          profileUrl: session?.user.image,
        }),
      });

      const { user } = await res.json();
      setAccessToken(session.accessToken);
      setPublicId(user.publicId);

      router.replace("/map");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <SubHeader
        isBackBtn={false}
        DescTitleText={`식샤 나눔을 위해
          동네를 공유해주세요.`}
        DescSubText="지금 위치는 어디신가요?"
      />
      <section className="h-[calc(100vh-180px)] flex flex-col">
        <KakaoMap onSelect={onSelect} />
        <ButtonSection onClick={onClick} />
      </section>
    </>
  );
}
