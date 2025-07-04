"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { RegisterOptions } from "react-hook-form";

interface FormSelectProps {
  name: string;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  options: { label: string; value: number }[];
  rules?: RegisterOptions;
}

export default function FormSelect({
  name,
  disabled = false,
  label,
  placeholder,
  options,
  rules,
}: FormSelectProps) {
  return (
    <FormField
      name={name}
      rules={rules}
      render={({ field }) => {
        const { error } = useFormField();

        return (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <Select
                value={field.value ? String(field.value) : ""}
                disabled={disabled}
                onValueChange={(val) => {
                  field.onChange(Number(val));
                }}
              >
                <SelectTrigger
                  className={cn(
                    "body-sm",
                    field.value === undefined && "!font-light",
                    "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-2.5 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                    error && "border-destructive",
                    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                  )}
                >
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={String(option.value)}
                      className="body-sm"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
