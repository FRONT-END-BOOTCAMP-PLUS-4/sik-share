"use client";

import { useEffect, useState } from "react";
import { CameraIcon } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface FormImageUploadProps {
  name: string;
  defaultImage?: string;
  className?: string;
}

export function FormImageUpload({
  name,
  defaultImage = "/assets/images/example/default-profile.png",
  className = "",
}: FormImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <FormField
      name={name}
      render={({ field }) => {
        const file = field.value as FileList | undefined;

        useEffect(() => {
          if (file?.[0]) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result as string);
            reader.readAsDataURL(file[0]);
          } else {
            setPreview(null);
          }
        }, [file]);

        return (
          <FormItem className="flex flex-col items-center">
            <FormControl>
              <label
                htmlFor={`${name}-upload`}
                className={`relative cursor-pointer ${className}`}
              >
                <Image
                  src={preview || defaultImage}
                  alt="프로필 이미지"
                  width={96}
                  height={96}
                  unoptimized
                  className="w-24 h-24 rounded-full object-cover overflow-hidden"
                />
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">
                  <CameraIcon className="w-5 h-5 text-gray-600" />
                </div>
                <Input
                  type="file"
                  id={`${name}-upload`}
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files) {
                      field.onChange(e.target.files);
                    }
                  }}
                />
              </label>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
