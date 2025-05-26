import Image from "next/image";

export function AvatarGroup({ count = 3 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {Array.from({ length: count }).map((item, i) => (
          <Image
            key={`${item}-${i}`}
            src="/assets/images/example/default-profile.png"
            alt="프로필 이미지"
            width={22}
            height={22}
            className={`border border-[var(--light-green-50)] rounded-full ${i > 0 ? "-ml-1.5" : ""}`}
          />
        ))}
      </div>
      <p className="text-[12px]">{count}/5명</p>
    </div>
  );
}
