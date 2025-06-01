"use client";

import { Button } from "@/components/ui/button";

interface ButtonSectionProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function FormButton({
  onClick,
  disabled,
  children,
}: ButtonSectionProps) {
  return (
    <section className="absolute left-0 bottom-0 z-50 w-full py-3 px-4 bg-white border-t-1 border-zinc-300">
      <Button
        variant="joinFullBtn"
        size="lg"
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </Button>
    </section>
  );
}
