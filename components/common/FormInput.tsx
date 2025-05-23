import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { RegisterOptions } from "react-hook-form";

interface FormInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  description?: string;
  className?: string;
  inputClassName?: string;
  disabled?: boolean;
  onClick?: () => void;
  readOnly?: boolean;
  rules?: RegisterOptions;
  suffix?: string;
}

export default function FormInput({
  name,
  label,
  placeholder,
  type = "text",
  description,
  className,
  inputClassName,
  disabled,
  onClick,
  readOnly,
  rules,
  suffix,
}: FormInputProps) {
  return (
    <FormField
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <div className="relative">
            <FormControl>
              <Input
                className={inputClassName}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readOnly}
                onClick={onClick}
                {...field}
              />
            </FormControl>
            {suffix && (
              <span className="absolute right-3 top-2 text-zinc-500 text-sm font-light">
                {suffix}
              </span>
            )}
          </div>
          <FormMessage />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
}
