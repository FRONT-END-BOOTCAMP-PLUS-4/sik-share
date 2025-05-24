import { X } from "lucide-react";
import Image from "next/image";

interface ThumbnailProps {
  previews: string[];
  onDelete: (idx: number) => void;
}

export default function Thumbnail({ previews, onDelete }: ThumbnailProps) {
  return (
    <ul className="flex gap-2">
      {previews.map((url, idx) => (
        <li key={idx} className="relative">
          <div className="relative w-19 h-19 rounded-[6px] overflow-hidden">
            <Image
              src={url}
              alt={`업로드된 이미지 ${idx + 1}`}
              fill
              className="object-cover"
            />
            {idx === 0 && (
              <span className="absolute bottom-0 bg-[var(--dark-green)] text-white badge-bold  w-19 py-0.5 px-3.5">
                대표 사진
              </span>
            )}
          </div>
          <button
            type="button"
            className="absolute -top-1.5 -right-1.5 flex justify-center items-center bg-black text-white rounded-full p-0.5 cursor-pointer"
            onClick={() => onDelete(idx)}
          >
            <X strokeWidth={2} size={14} />
          </button>
        </li>
      ))}
    </ul>
  );
}
