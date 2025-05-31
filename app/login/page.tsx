"use client";

import SubHeader from "@/components/common/SubHeader";
import ButtonSection from "./components/ButtonSection";
import Title from "./components/Title";
import Image from "next/image";

export default function AuthPage() {
  return (
    <>
      <SubHeader />
      <section className="relative h-[calc(100vh-171px)]">
        <div className="px-11 h-full flex flex-col gap-[60px] mt-[60px]">
          <Title />
          <ButtonSection />
        </div>
        <Image
          src="/assets/images/login/image.png"
          alt="로그인 페이지 하단 홍보용 이미지"
          fill
          className="!top-36 object-cover pointer-events-none"
        />
      </section>
    </>
  );
}
