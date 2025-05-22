"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import type { RegisterOptions } from "react-hook-form";

interface FormDetailProps {
  name: string;
  label: string;
  placeholder: string;
  className?: string;
  textareaClassName?: string;
  rules?: RegisterOptions;
}

export default function FormDetail({
  name,
  label,
  placeholder,
  className,
  textareaClassName = "",
  rules,
}: FormDetailProps) {
  return (
    <FormField
      name={name}
      rules={rules}
      render={({ field }) => {
        const { formItemId } = useFormField();

        return (
          <FormItem className={className}>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <textarea
                id={formItemId}
                placeholder={placeholder}
                className={cn(
                  "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 min-h-40 resize-none rounded-md border bg-transparent px-3 py-2.5 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                  textareaClassName,
                )}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
