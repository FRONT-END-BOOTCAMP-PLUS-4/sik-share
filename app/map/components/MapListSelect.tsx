import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function MapListSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[124px] ml-auto">
        <SelectValue placeholder="전체" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="share">나눔</SelectItem>
        <SelectItem value="groupbuy">같이 장보기</SelectItem>
      </SelectContent>
    </Select>
  );
}
