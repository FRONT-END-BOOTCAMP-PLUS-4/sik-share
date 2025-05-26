"use client";
import { useCallback, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubHeader from "@/components/common/SubHeader";
import { useInfiniteScroll } from "@/hooks/useInfinityScroll";
import { useTabCounts } from "@/app/users/hooks/useTabCounts";
import { HistoryItemList } from "@/app/users/components/HistoryItemList";
import type { ListCardProps } from "@/components/common/ListCard";
import type { ShareListCardProps } from "@/app/users/components/ShareListCard";
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
  const { counts } = useTabCounts({ publicId, type, tabType });
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

  const { items, loading, hasMore, ref } = useInfiniteScroll({
    fetcher,
    itemsPerPage: 20,
    delay: 300,
    deps: [publicId, currentTab],
  });

  const tabValues = getTabValues(type, isMyAccount);

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
          <TabsList className="w-full">
            {tabValues.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex-1 flex gap-1"
              >
                <div>{tab.label}</div>
                <div>
                  {counts[tab.value] !== 0
                    ? counts?.[
                        tab.value === "group-buy" ? "groupbuy" : tab.value
                      ]
                    : ""}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabValues.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <HistoryItemList
                items={items as ListCardProps[] | ShareListCardProps[]}
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
              />
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </>
  );
}
