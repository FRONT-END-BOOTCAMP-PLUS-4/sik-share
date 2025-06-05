"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CalendarProps {
  selected: Date | null;
  onSelect: (date: Date | null) => void;
}

export function Calendar({ selected, onSelect }: CalendarProps) {
  return (
    <div className="p-4">
      <DatePicker
        inline
        selected={selected}
        onChange={(d) => onSelect(d as Date)}
        dayClassName={() => "text-sm"}
        minDate={new Date()}
        calendarClassName="!border-none !font-['GyeonggiTitle'] !font-light"
      />
    </div>
  );
}
