import Image from "next/image";

export interface ReviewListItemProps {
  id: number;
  writerProfileUrl: string;
  writerName: string;
  reviewContent: string;
  writerScore: number;
}

export default function ReviewListItem({
  writerProfileUrl,
  writerName,
  reviewContent,
  writerScore,
}: ReviewListItemProps) {
  return (
    <li>
      <div className="flex items-center gap-2">
        <div className="flex-shrink-0 rounded-full overflow-hidden">
          <Image
            src={writerProfileUrl}
            width={38}
            height={38}
            className="w-9 h-9 object-cover"
            alt={`${writerName} 프로필`}
          />
        </div>
        <div>
          <div className="text-md/4">{writerName}</div>
          <div className="text-primary badge-medium">{writerScore}°C</div>
        </div>
      </div>
      <div className="bg-zinc-200 rounded-[25px] rounded-tl-none p-4 body-sm mt-2.5">
        {reviewContent}
      </div>
    </li>
  );
}
