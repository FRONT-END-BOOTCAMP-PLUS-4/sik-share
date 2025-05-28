import Image from "next/image";

interface AvatarGroupProps {
  count: number;
  capacity: number;
  participantProfileUrls: string[];
}

export function AvatarGroup({
  count = 3,
  capacity,
  participantProfileUrls,
}: AvatarGroupProps) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {Array.from({ length: count }).map((item, i) => (
          <Image
            key={`${item}-${i as number}`}
            src={participantProfileUrls[i] || "/default-profile.png"}
            alt="프로필 이미지"
            width={22}
            height={22}
            className={`w-[22px] h-[22px] object-cover border border-[var(--light-green-50)] rounded-full ${i > 0 ? "-ml-1.5" : ""}`}
          />
        ))}
      </div>
      <p className="text-[12px]">
        {count}/{capacity}명
      </p>
    </div>
  );
}
