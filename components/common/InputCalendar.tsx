"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

interface InputCalendarProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  hasError?: boolean;
}

export default function InputCalendar({
  value,
  onChange,
  hasError = false,
}: InputCalendarProps) {
  const label = value ? format(value, "yyyy-MM-dd") : "YYYY-MM-DD";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start items-center text-zinc-500",
            value
              ? "text-foreground font-normal"
              : "text-muted-foreground font-light",
            hasError && "!border-destructive",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {label}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start">
        <Calendar selected={value} onSelect={onChange} />
      </PopoverContent>
    </Popover>
  );
}
