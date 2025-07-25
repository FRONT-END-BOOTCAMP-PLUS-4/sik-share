"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import InputCalendar from "@/components/common/InputCalendar";
import type { RegisterOptions } from "react-hook-form";

interface FormCalendarProps {
  name: string;
  label?: string;
  rules?: RegisterOptions;
  description?: string;
}

export default function FormCalendar({
  name,
  label,
  rules,
  description,
}: FormCalendarProps) {
  return (
    <FormField
      name={name}
      rules={rules}
      render={({ field }) => {
        const { invalid } = useFormField();
        return (
          <FormItem className="flex flex-col">
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <InputCalendar
                value={field.value ?? null}
                onChange={(date) => field.onChange(date)}
                hasError={invalid}
              />
            </FormControl>
            <FormMessage />
            {description && <FormDescription>{description}</FormDescription>}
          </FormItem>
        );
      }}
    />
  );
}
