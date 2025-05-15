"use client";

import Loading from "@/components/common/Loading";
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

  return (
    <section className="flex justify-center items-center h-[calc(100vh-171px)]">
      <Loading>로그인 중입니다...</Loading>
    </section>
  );
}
