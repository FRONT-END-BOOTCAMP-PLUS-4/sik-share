"use client";

import SubHeader from "@/components/common/SubHeader";
import ButtonSection from "./components/ButtonSection";
import Title from "./components/Title";

export default function AuthPage() {
  return (
    <>
      <SubHeader />
      <section className="px-11 h-[calc(100vh-171px)]">
        <div className="h-full flex flex-col justify-around">
          <Title />
          <div className="flex justify-center">로티</div>
          <ButtonSection />
        </div>
      </section>
    </>
  );
}
