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
	const [date, setDate] = useState<Date | undefined>(undefined);
	const buttonLabel = date ? format(date, "yyyy-MM-dd") : "Pick a date";

	return (
		<Popover>
			<PopoverTrigger asChild className="cursor-pointer">
				<Button
					variant="outline"
					className="w-full justify-start text-zinc-500"
				>
					<CalendarIcon />
					{buttonLabel}
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={date}
					onSelect={(selected) => {
						if (selected) {
							setDate(selected);
						}
					}}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
}
