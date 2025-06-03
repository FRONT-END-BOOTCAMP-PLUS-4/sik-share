"use client";

import SubHeader from "@/components/common/SubHeader";
import ButtonSection from "./components/ButtonSection";
import Title from "./components/Title";

export default function AuthPage() {
  return (
    <>
      <SubHeader />
      <section className="relative h-[calc(100svh-62px)]">
        <div className="px-11 h-full flex flex-col justify-center gap-[60px]">
          <Title />
          <ButtonSection />
        </div>
      </section>
    </>
  );
}
