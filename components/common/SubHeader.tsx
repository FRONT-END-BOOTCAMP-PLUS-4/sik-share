"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ChevronLeft, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubHeaderProps {
  isBackBtn?: boolean;
  titleText?: string;
  iconType?: "chevron" | "close";
  DescTitleText?: string;
  DescSubText?: string;
}

export default function SubHeader({
  isBackBtn = true,
  titleText,
  iconType = "chevron",
  DescTitleText,
  DescSubText,
}: SubHeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const IconComponent = iconType === "chevron" ? ChevronLeft : X;

  return (
    <header
      className={cn(
        "z-10 sticky top-0 bg-white min-h-[var(--h-header)] px-4 py-3 border-b border-b-zinc-300",
        titleText && "flex justify-center items-center",
      )}
    >
      {isBackBtn && (
        <Button
          variant="ghost"
          size="icon"
          className={cn(titleText && "absolute left-4")}
          onClick={handleBack}
        >
          <IconComponent size={24} strokeWidth={2} />
        </Button>
      )}
      {titleText && <div className="title-md">{titleText}</div>}
      {DescTitleText && (
        <div className="py-3 whitespace-pre-line">
          <div className="text-lg/6  font-bold">{DescTitleText}</div>
          <div className="body-sm  text-zinc-500 pt-2">{DescSubText}</div>
        </div>
      )}
    </header>
  );
}
