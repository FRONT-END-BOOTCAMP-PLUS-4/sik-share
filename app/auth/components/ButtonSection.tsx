"use client";

import LoginButton from "./LoginButton";
import LastLoginInfo from "./LastLoginInfo";
import type { Provider } from "@/types/types";

const socialTypes: { id: number; name: Provider; imgPath: string }[] = [
  {
    id: 0,
    name: "kakao",
    imgPath: "/assets/images/social/kakao.svg",
  },
  {
    id: 1,
    name: "naver",
    imgPath: "/assets/images/social/naver.svg",
  },
  {
    id: 2,
    name: "google",
    imgPath: "/assets/images/social/google.svg",
  },
];

export default function ButtonSection() {
  return (
    <section className="flex flex-col gap-4">
      <LastLoginInfo />
      <div className="flex justify-center gap-6">
        {socialTypes.map((socialType) => (
          <LoginButton
            key={socialType.id}
            name={socialType.name}
            imgPath={socialType.imgPath}
          />
        ))}
      </div>
    </section>
  );
}
