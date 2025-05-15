"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PostLoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated") return;

    const checkUser = async () => {
      try {
        const res = await fetch("/api/users/exist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: session.user.email }),
        });

        const { exists } = await res.json();

        if (exists) {
          router.replace("/map");
        } else {
          router.replace("/auth/onboarding");
        }
      } catch (err) {
        console.error(err);
      }
    };

    checkUser();
  }, [status, session, router]);

  return <p>로그인 처리 중입니다.</p>;
}
