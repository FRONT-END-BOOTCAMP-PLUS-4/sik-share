"use client";
import { HistorySection } from "@/app/users/components/HistorySection";
import { useUserInfo } from "@/app/users/hooks/useUserInfo";

export default function SharesHistory() {
  const { publicId, isMyAccount } = useUserInfo();

  return (
    <HistorySection
      title="나눔 내역"
      publicId={publicId as string}
      isMyAccount={isMyAccount}
      type="share"
    />
  );
}
