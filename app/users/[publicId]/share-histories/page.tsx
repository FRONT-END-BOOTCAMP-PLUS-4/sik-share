"use client";
import { HistorySection } from "@/app/users/components/HistorySection";
import { useUserInfo } from "@/app/users/hooks/useUserInfo";

export default function SharesHistory() {
  const { id, isMyAccount } = useUserInfo();

  return (
    <HistorySection
      title="나눔 내역"
      ownerId={id as string}
      isMyAccount={isMyAccount}
      type="share"
    />
  );
}
