"use client";
import { HistorySection } from "@/app/users/components/HistorySection";
import { useUserInfo } from "@/app/users/hooks/useUserInfo";

export default function GroupBuyHistory() {
  const { publicId, isMyAccount } = useUserInfo();

  return (
    <HistorySection
      title="나의 참여 내역"
      publicId={publicId as string}
      isMyAccount={isMyAccount}
      type="participation"
      tabType="participation"
    />
  );
}
