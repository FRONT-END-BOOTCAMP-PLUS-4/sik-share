"use client";

import Loading from "@/components/common/Loading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PostLoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading" || status !== "authenticated") return;

    const checkUser = async () => {
      try {
        const res = await fetch("/api/users/exist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: session.user.email }),
        });

        const data = await res.json();

        if (data.exists) {
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

  return <Loading />;
}
