import Image from "next/image";

export interface ReviewListItemProps {
  profileImgUrl: string;
  nickName: string;
  detailReview: string;
  shareScore: number;
}

export default function ReviewListItem({
  profileImgUrl,
  nickName,
  detailReview,
  shareScore,
}: ReviewListItemProps) {
  return (
    <li>
      <div className="flex items-center gap-2">
        <div className="flex-shrink-0 rounded-full overflow-hidden">
          <Image
            src={profileImgUrl}
            width={38}
            height={38}
            alt={`${nickName} 프로필`}
          />
        </div>
        <div>
          <div className="text-md/4">{nickName}</div>
          <div className="text-primary badge-medium">{shareScore}°C</div>
        </div>
      </div>
      <div className="bg-zinc-200 rounded-[25px] rounded-tl-none p-4 body-sm mt-2.5">
        {detailReview}
      </div>
    </li>
  );
}
