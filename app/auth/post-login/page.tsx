"use client";

import Loading from "@/components/common/Loading";
import { useAuthStore } from "@/store/authStore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PostLoginPage() {
  const { data: session, status } = useSession();
  const { setAccessToken, setPublicId } = useAuthStore();
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

        const { exists, publicId } = await res.json();

        if (exists) {
          router.replace("/map");
          setAccessToken(session.accessToken);
          setPublicId(publicId);
        } else {
          router.replace("/auth/onboarding");
        }
      } catch (err) {
        console.error(err);
      }
    };

    checkUser();
  }, [status, session, router, setAccessToken, setPublicId]);

  return (
    <section className="flex justify-center items-center h-[calc(100vh-171px)]">
      <Loading>로그인 중입니다...</Loading>
    </section>
  );
}
