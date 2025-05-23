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
}: FormInputProps) {
  return (
    <FormField
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
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
          <FormMessage />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
}
