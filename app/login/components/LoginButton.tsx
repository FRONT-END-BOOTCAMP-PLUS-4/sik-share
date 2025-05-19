"use client";

import type { Provider } from "@/types/types";
import { signIn } from "next-auth/react";
import Image from "next/image";

interface LoginButtonProps {
  name: Provider;
  imgPath: string;
}

export default function LoginButton({ name, imgPath }: LoginButtonProps) {
  const handleLogin = () => {
    localStorage.setItem("lastLoginProvider", name);
    signIn(name, { callbackUrl: "/auth/post-login" });
  };

  return (
    <button onClick={handleLogin} type="button" className="cursor-pointer">
      <Image src={imgPath} alt={name} width={64} height={64} />
    </button>
  );
}
