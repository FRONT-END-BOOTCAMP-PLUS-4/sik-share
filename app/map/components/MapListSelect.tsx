"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMapFilterStore } from "@/stores/useMapFilterStore";

export function MapListSelect({
  onChange,
}: { onChange: (value: string) => void }) {
  const { filterType, setFilterType } = useMapFilterStore();

  return (
    <Select value={filterType} onValueChange={setFilterType}>
      <SelectTrigger className="w-[124px] ml-auto">
        <SelectValue placeholder="전체" />
      </SelectTrigger>
      <SelectContent className="!font-light">
        <SelectItem value="all">전체</SelectItem>
        <SelectItem value="share">나눔</SelectItem>
        <SelectItem value="groupbuy">같이 장보기</SelectItem>
      </SelectContent>
    </Select>
  );
}
