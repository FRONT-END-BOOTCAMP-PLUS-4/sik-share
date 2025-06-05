"use client";
import Image from "next/image";
import EditProfileButton from "./EditProfileButton";
import { useState } from "react";

interface profileProps {
  userName: string;
  profileImage: string;
  isMyAccount: boolean;
  memberTitle: string;
}

export default function Profile({
  isMyAccount,
  memberTitle,
  userName,
  profileImage,
}: profileProps) {
  const [nickName, setNickName] = useState(userName);
  const [profileUrl, setProfileUrl] = useState(profileImage);

  return (
    <div className="flex gap-2 px-6 items-center pb-[18px]">
      <Image
        src={profileUrl}
        alt="프로필 이미지"
        width={46}
        height={46}
        className="min-w-[46px] h-[46px] border-1 border-zinc-100 rounded-full object-cover"
      />
      <div className="flex justify-between w-full">
        <div>
          <div className="text-sm/3.5 text-zinc-400">{memberTitle}</div>
          <div className="text-2xl/6 pt-1.5">{nickName}</div>
        </div>
        {isMyAccount && (
          <EditProfileButton
            userName={nickName}
            profileImage={profileUrl}
            onUpdateProfile={(updated) => {
              setNickName(updated.nickName);
              setProfileUrl(updated.profileImageUrl);
            }}
          />
        )}
      </div>
    </div>
  );
}
