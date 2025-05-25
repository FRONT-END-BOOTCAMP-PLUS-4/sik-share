"use client";
import { HistorySection } from "@/app/users/components/HistorySection";
import { useUserInfo } from "@/app/users/hooks/useUserInfo";

export default function GroupBuyHistory() {
  const { publicId, isMyAccount } = useUserInfo();

  return (
    <HistorySection
      title="같이 장보기 내역"
      publicId={publicId as string}
      isMyAccount={isMyAccount}
      type="groupbuy"
      tabType="status"
    />
  );
}
