"use client";
import { useCallback, useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubHeader from "@/components/common/SubHeader";
import { useInfiniteScroll } from "@/hooks/useInfinityScroll";
import { useTotalCounts } from "@/app/users/hooks/useTotalCounts";
import { HistoryItemList } from "@/app/users/components/HistoryItemList";
import type { ShareListCardProps } from "@/app/users/components/ShareListCard";
import type { GroupBuyListCardProps } from "@/app/users/components/GroupBuyListCard";
import { getTabValues } from "@/app/users/utils";

interface HistorySectionProps {
  type: "share" | "group-buy" | "participation";
  tabType: "status" | "participation";
  title: string;
  publicId: string;
  isMyAccount: boolean;
}

export function HistorySection({
  type,
  title,
  publicId,
  isMyAccount,
  tabType,
}: HistorySectionProps) {
  const tabValues = getTabValues(type, isMyAccount);
  const [currentTab, setCurrentTab] = useState<string>(
    tabType === "status" ? "active" : "share",
  );

  const fetcher = useCallback(
    async (page: number, itemsPerPage: number) => {
      if (publicId === null) return [];
      const res = await fetch(
        `/api/users/${type}s?publicId=${publicId}&status=${currentTab}&page=${page}&itemsPerPage=${itemsPerPage}`,
      );
      const data = await res.json();

      return data.result;
    },
    [publicId, currentTab, type],
  );

  const {
    items: originalItems,
    loading,
    hasMore,
    ref,
  } = useInfiniteScroll({
    fetcher,
    itemsPerPage: 20,
    delay: 300,
    deps: [publicId, currentTab],
  });

  const [items, setItems] = useState<
    (ShareListCardProps | GroupBuyListCardProps)[]
  >([]);

  useEffect(() => {
    setItems(originalItems as (ShareListCardProps | GroupBuyListCardProps)[]);
  }, [originalItems]);

  const { counts: originalCounts } = useTotalCounts({
    publicId,
    type,
    tabType,
  });

  const [counts, setCounts] = useState(originalCounts);

  useEffect(() => {
    setCounts(originalCounts);
  }, [originalCounts]);

  const handleDeleteItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));

    setCounts((prev) => ({
      ...prev,
      [currentTab]: Math.max((prev?.[currentTab] ?? 1) - 1, 0),
    }));
  };

  const TabList = tabValues.map((tab) => {
    const key = tab.value === "group-buy" ? "groupbuy" : tab.value;
    const count = counts[key];

    return (
      <TabsTrigger
        key={tab.value}
        value={tab.value}
        className="flex-1 flex gap-1"
      >
        <div>{tab.label}</div>
        <div>{count !== 0 ? count : ""}</div>
      </TabsTrigger>
    );
  });

  return (
    <>
      <SubHeader titleText={title} />
      <section className="pt-4">
        <Tabs
          value={currentTab}
          className="w-full"
          onValueChange={(val) => {
            setCurrentTab(val);
          }}
        >
          <TabsList className="w-full">{TabList}</TabsList>

          {tabValues.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              {type === "share" &&
                tabType === "status" &&
                tab.value === "expired" && (
                  <div className="text-center caption text-zinc-400 py-3 border-b border-b-zinc-200">
                    작성한 지 24시간이 지난 나눔 입니다.
                  </div>
                )}
              <HistoryItemList
                items={items}
                type={
                  type === "participation"
                    ? tab.value === "group-buy"
                      ? "group-buy"
                      : "share"
                    : type
                }
                refTarget={ref}
                loading={loading}
                hasMore={hasMore}
                isEdit={type !== "participation"}
                onDeleteItem={handleDeleteItem}
              />
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </>
  );
}
