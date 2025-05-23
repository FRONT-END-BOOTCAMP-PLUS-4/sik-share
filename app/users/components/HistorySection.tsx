import { useCallback, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HistoryItemList } from "./HistoryItemList";
import type { ListCardProps } from "@/components/common/ListCard";
import SubHeader from "@/components/common/SubHeader";
import type { ShareListCardProps } from "@/components/common/ShareListCard";
import { useInfiniteScroll } from "@/hooks/useInfinityScroll";

interface HistorySectionProps {
  type: "share" | "group" | "participations";
  title: string;
  publicId: string;
  isMyAccount: boolean;
  defaultTab?: string;
}

export function HistorySection({
  type,
  title,
  publicId,
  isMyAccount,
  defaultTab,
}: HistorySectionProps) {
  const [status, setStatus] = useState<"active" | "completed" | "expired">(
    "active",
  );

  const fetcher = useCallback(
    async (page: number, itemsPerPage: number) => {
      const res = await fetch(`/api/users/${type}s`, {
        method: "GET",
        body: JSON.stringify({
          ownerId: publicId,
          status: status,
          page: page,
          itemsPerPage: itemsPerPage,
        }),
      });

      const data = await res.json();
      return data.items;
    },
    [publicId, status, type],
  );

  const { items, loading, hasMore, ref } = useInfiniteScroll({
    fetcher,
    itemsPerPage: 20,
    delay: 300,
    deps: [publicId, status],
  });

  const tabValues = [
    { label: "진행 중", value: "active" },
    { label: "종료", value: "completed" },
    ...(isMyAccount ? [{ label: "기한 만료", value: "expired" }] : []),
  ];

  return (
    <>
      <SubHeader titleText={title} />
      <section className="pt-4">
        <Tabs
          defaultValue={defaultTab ?? tabValues[0].value}
          className="w-full"
        >
          <TabsList className="w-full">
            {tabValues.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className="flex-1">
                {tab.label}
                {/*  {tab.count} */}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabValues.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <HistoryItemList
                items={items}
                refTarget={ref}
                loading={loading}
                hasMore={hasMore}
                type={
                  type === "participations"
                    ? tab.value === "group"
                      ? "group"
                      : "share"
                    : type
                }
              />
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </>
  );
}
