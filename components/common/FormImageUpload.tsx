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
import { toast } from "sonner";
import { MAX_SIZE } from "@/lib/constants";

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
                  className="w-24 h-24  border-1 border-zinc-100 rounded-full object-cover overflow-hidden"
                  unoptimized
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
                    const files = e.target.files;

                    if (files?.[0]) {
                      const file = files[0];

                      if (file.size > MAX_SIZE) {
                        toast.error(
                          "파일 크기가 너무 큽니다. 5MB 이하로 업로드 해주세요.",
                        );
                        return;
                      }

                      field.onChange(files);
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
