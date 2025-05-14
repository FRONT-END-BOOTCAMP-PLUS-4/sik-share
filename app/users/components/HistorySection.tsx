import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HistoryItemList } from "./HistoryItemList";
import type { ListCardProps } from "@/components/common/ListCard";
import SubHeader from "@/components/common/SubHeader";
import type { ShareListCardProps } from "@/components/common/ShareListCard";

interface HistorySectionProps {
  type: "share" | "group" | "participations";
  title: string;
  tabValues: { label: string; count: number; value: string }[];
  tabItems: Record<string, ListCardProps[] | ShareListCardProps[]>;
  defaultTab?: string;
}

export function HistorySection({
  type,
  title,
  tabValues,
  tabItems,
  defaultTab,
}: HistorySectionProps) {
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
              </TabsTrigger>
            ))}
          </TabsList>

          {tabValues.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <HistoryItemList
                items={tabItems[tab.value] ?? []}
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
