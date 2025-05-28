import Image from "next/image";
import { AvatarGroup } from "./AvatarGroup";

interface AuthorInfoProps {
  variant: "share" | "groupbuy";
}

export function AuthorInfo({ variant }: AuthorInfoProps) {
  return (
    <section className="flex items-center mt-4 pb-2 border-b">
      <Image
        src="/assets/images/example/default-profile.png"
        alt="프로필 이미지"
        width={38}
        height={38}
        className="w-[38px] h-[38px] object-cover rounded-full"
      />
      <div className="flex justify-between items-end w-full">
        <div className="flex flex-col ml-2">
          <p className="body-md">씩씩한 감자</p>
          <p className="text-[12px] text-primary">19.5°C</p>
        </div>
        {variant === "groupbuy" && <AvatarGroup count={3} />}
      </div>
    </section>
  );
}
