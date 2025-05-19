"use client";

import DropdownButton, {
  type DropdownOption,
} from "@/components/common/DropdownButton";

export default function AddButton() {
  const options: DropdownOption[] = [
    {
      id: "group-buy",
      label: "공동 장보기",
      onClick: () => {},
    },
    {
      id: "share",
      label: "나눔",
      onClick: () => {},
    },
  ];

  return <DropdownButton options={options} type="register" align="top" />;
}
