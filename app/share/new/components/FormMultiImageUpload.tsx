"use client";

import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState } from "react";
import { type RegisterOptions, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import Thumbnail from "./Thumbnail";
import { toast } from "sonner";
import { MAX_SIZE } from "@/lib/constants";

interface FormMultiImageUploadProps {
  name: "images";
  rules?: RegisterOptions;
}

export default function FormMultiImageUpload({
  name,
  rules,
}: FormMultiImageUploadProps) {
  const { setValue, trigger } = useFormContext();

  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  // 이미지 미리보기 URL 생성
  useEffect(() => {
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviews(urls);
    return () => {
      for (const url of urls) {
        URL.revokeObjectURL(url);
      }
    };
  }, [files]);

  useEffect(() => {
    setValue(name, files, { shouldValidate: false });
    if (files.length > 0) trigger(name);
  }, [files, name, setValue, trigger]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);

    if (files.length + newFiles.length > 3) {
      toast.error("사진은 최대 3개까지 첨부할 수 있습니다.");
      return;
    }

    for (const file of newFiles) {
      if (file.size > MAX_SIZE) {
        toast.error("파일 크기가 너무 큽니다. 50MB 이하로 업로드 해주세요.");
        return;
      }
    }
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDelete = (index: number) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
  };

  return (
    <FormField
      name={name}
      rules={rules}
      render={() => {
        const { error } = useFormField();
        return (
          <FormItem>
            <FormControl>
              <div className="flex items-start gap-2 pt-1">
                <label
                  htmlFor={`${name}-upload`}
                  className={cn(
                    error && "border-destructive",
                    "w-19 h-19 border rounded-[6px] flex flex-col justify-center items-center cursor-pointer",
                  )}
                >
                  <Image
                    src="/assets/images/lucide/camera.svg"
                    alt="camera"
                    width={40}
                    height={40}
                  />
                  <span className="body-sm text-zinc-500">
                    <span
                      className={`${files.length > 0 ? "text-[var(--orange)]" : "text-zinc-500"}`}
                    >{`${files.length}`}</span>
                    /3
                  </span>
                  <Input
                    id={`${name}-upload`}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleUpload}
                  />
                </label>
                <Thumbnail previews={previews} onDelete={handleDelete} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
