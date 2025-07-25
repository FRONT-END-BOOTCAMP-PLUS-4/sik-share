"use client";

import { useCallback, useEffect, useState } from "react";
import KakaoMap from "@/components/common/KakaoMap";
import SubHeader from "@/components/common/SubHeader";
import ButtonSection from "./components/ButtonSection";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "@/components/common/Loading";
import { toast } from "sonner";

export default function OnboardingPage() {
  const { data: session, status, update } = useSession();
  const router = useRouter();

  const [location, setLocation] = useState<{
    address: string;
    neighborhoodName: string;
  } | null>(null);
  const [hasUpdated, setHasUpdated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSelect = useCallback((address: string, neighborhoodName: string) => {
    setLocation({ address, neighborhoodName });
  }, []);

  const onClick = async () => {
    if (!location) {
      alert("지도를 움직여 위치를 지정해주세요.");
      return;
    }

    const isAvailable = location.address.split(" ")[1] === "관악구";

    if (!isAvailable) {
      toast.error("식샤는 관악구에서만 가능합니다.");
      return;
    }

    if (status === "loading") {
      return;
    }

    if (status !== "authenticated") {
      router.replace("/login");
      return;
    }

    setIsSubmitting(true);
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

      if (!res.ok) {
        setIsSubmitting(false);
        toast.error("잠시 후 다시 시도해주세요");
      }

      await update({ forceRefresh: true });
      setHasUpdated(true);
      router.replace("/map");
    } catch (err) {
      setIsSubmitting(false);
      toast.error("잠시 후 다시 시도해주세요");
      console.error(err);
    }
  };

  useEffect(() => {
    if (hasUpdated) return;
    if (status === "authenticated" && session?.user?.publicId) {
      toast.warning("잘못된 접근입니다.");
      router.replace("/map");
      return;
    }
  }, [status, session, router, hasUpdated]);

  if (
    status === "loading" ||
    (status === "authenticated" && session?.user?.publicId)
  )
    return <Loading />;

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
        <ButtonSection onClick={onClick} disabled={isSubmitting} />
      </section>
    </>
  );
}
