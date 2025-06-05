"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LastLoginInfo() {
  const [provider, setProvider] = useState<string | null>(null);

  useEffect(() => {
    const lastLoginInfo = localStorage.getItem("lastLoginProvider");
    setProvider(lastLoginInfo);
  }, []);

  if (!provider) return null;

  return (
    <div className="flex justify-center">
      <div className="inline-flex w-fit justify-center gap-2 border rounded-[30px] py-1.5 px-4">
        <Image
          src={`/assets/images/social/${provider}.svg`}
          alt="naver"
          width={16}
          height={16}
        />
        <p className="caption text-zinc-900">
          <span className="font-bold">{provider}</span>로 로그인한 적이 있어요!
        </p>
      </div>
    </div>
  );
}
