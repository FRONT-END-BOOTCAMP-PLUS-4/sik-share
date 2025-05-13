"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

export default function InputCalendar() {
  const [date, setDate] = useState<Date | null>(null);
  const label = date ? format(date, "yyyy-MM-dd") : "Pick a date";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start items-center text-zinc-500 cursor-pointer"
        >
          <CalendarIcon />
          {label}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="end">
        <Calendar selected={date} onSelect={(d) => setDate(d)} />
      </PopoverContent>
    </Popover>
  );
}
