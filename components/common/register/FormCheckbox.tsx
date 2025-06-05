"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { type RegisterOptions, useFormContext } from "react-hook-form";

interface FormCheckBoxProps {
  name: string;
  label: string;
  options: { id: number; content: string }[];
  rules?: RegisterOptions;
}

export default function FormCheckbox({
  name,
  label,
  options,
  rules,
}: FormCheckBoxProps) {
  const { getValues, setValue } = useFormContext();

  const handleChange = (checked: boolean, id: number) => {
    const prev = (getValues(name) as number[]) || [];

    if (checked) {
      setValue(name, [...prev, id]);
    } else {
      setValue(
        name,
        prev.filter((item) => item !== id),
      );
    }
  };

  return (
    <FormField
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="pb-2 font-bold">{label}</FormLabel>
          <FormControl>
            <div className="flex flex-col gap-2">
              {options.map((option) => {
                const selected = (getValues(name) as number[]) || [];
                const checked = selected.includes(option.id);

                return (
                  <div key={option.id} className="flex items-center gap-2">
                    <Checkbox
                      id={`checkbox-${option.id}`}
                      checked={checked}
                      onCheckedChange={(checked) =>
                        handleChange(!!checked, option.id)
                      }
                      className="data-[state=checked]:bg-[var(--dark-green)] data-[state=checked]:border-[var(--dark-green)] border-[var(--dark-green)]"
                    />
                    <label
                      htmlFor={`checkbox-${option.id}`}
                      className="body-sm"
                    >
                      {option.content}
                    </label>
                  </div>
                );
              })}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
