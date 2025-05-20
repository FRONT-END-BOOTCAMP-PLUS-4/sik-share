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
import { CameraIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

interface FormMultiImageUploadProps {
  name: "images";
}

export function FormMultiImageUpload({ name }: FormMultiImageUploadProps) {
  const { setValue } = useFormContext();
  const { formItemId, formMessageId } = useFormField();

  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  // 이미지 미리보기 URL 생성
  useEffect(() => {
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviews(urls);
    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, [files]);

  // RHF 상태 동기화
  useEffect(() => {
    setValue(name, files);
  }, [files, name, setValue]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);
    if (files.length + newFiles.length > 3) return;
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleRemove = (index: number) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
  };

  return (
    <FormField
      name={name}
      render={() => (
        <FormItem>
          <FormControl>
            <div className="flex items-start gap-4">
              {/* 업로드 버튼 */}
              <label
                htmlFor={`${name}-upload`}
                className="w-24 h-24 border border-input flex flex-col justify-center items-center rounded-md bg-muted/10 cursor-pointer"
              >
                <CameraIcon className="w-6 h-6 text-gray-500" />
                <span className="text-xs text-gray-500 mt-1">
                  {`${files.length}/3`}
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

              {/* 썸네일 목록 */}
              <ul className="flex gap-2">
                {previews.map((url, idx) => (
                  <li
                    key={idx}
                    className="relative w-24 h-24 rounded-md overflow-hidden"
                  >
                    <Image
                      src={url}
                      alt={`업로드된 이미지 ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                    <button
                      type="button"
                      className="absolute top-1 right-1 bg-black bg-opacity-60 text-white rounded-full p-0.5 text-xs"
                      onClick={() => handleRemove(idx)}
                    >
                      <X className="w-4 h-4" />
                    </button>
                    {idx === 0 && (
                      <span className="absolute bottom-1 left-1 bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded">
                        대표 사진
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
