"use client";

import { Button } from "@/components/ui/button";

interface ButtonSectionProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function ButtonSection({
  onClick,
  disabled,
}: ButtonSectionProps) {
  return (
    <section className="absolute bottom-0 z-50 w-full py-3 px-4 bg-white border-t-1 border-zinc-300">
      <Button
        variant="joinFullBtn"
        size="lg"
        onClick={onClick}
        disabled={disabled}
      >
        위치 선택 완료
      </Button>
    </section>
  );
}
