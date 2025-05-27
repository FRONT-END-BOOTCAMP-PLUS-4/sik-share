"use client";

import Image from "next/image";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import type { RegisterOptions } from "react-hook-form";

type RatingOption = {
  label: string;
  value: number;
  imgSrc: string;
  selectedImgSrc: string;
};

interface FormRatingSelectorProps {
  name: string;
  options: RatingOption[];
  rules?: RegisterOptions;
}

export default function FormRatingSelector({
  name,
  options,
  rules,
}: FormRatingSelectorProps) {
  return (
    <FormField
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="flex justify-center gap-8 p-1">
              {options.map((option) => {
                const isSelected = field.value === option.value;

                return (
                  <button
                    className="flex flex-col items-center gap-2 cursor-pointer"
                    key={option.value}
                    type="button"
                    onClick={() => field.onChange(option.value)}
                  >
                    <Image
                      src={isSelected ? option.selectedImgSrc : option.imgSrc}
                      alt={option.label}
                      width={80}
                      height={99}
                    />
                    <p className="body-sm">{option.label}</p>
                  </button>
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
