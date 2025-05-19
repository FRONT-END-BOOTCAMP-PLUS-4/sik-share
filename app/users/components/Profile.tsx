"use client";
import Image from "next/image";
import EditProfileButton from "./EditProfileButton";
import type { EditProfileButtonProps } from "./EditProfileButton";

interface profileProps extends EditProfileButtonProps {
  isMyAccount: boolean;
  memberTitle: string;
}

export default function Profile({
  isMyAccount,
  memberTitle,
  userName,
  profileImage,
}: profileProps) {
  return (
    <div className="flex gap-2 px-6 items-center pb-[18px]">
      <Image
        src={profileImage}
        alt="프로필 이미지"
        width={46}
        height={46}
        className="rounded-full"
      />
      <div className="flex justify-between w-full">
        <div>
          <div className="text-sm/3.5 text-zinc-400">{memberTitle}</div>
          <div className="text-2xl/6 pt-1.5">{userName}</div>
        </div>
        {isMyAccount && (
          <EditProfileButton userName={userName} profileImage={profileImage} />
        )}
      </div>
    </div>
  );
}
