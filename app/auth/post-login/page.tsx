"use client";

import Loading from "@/components/common/Loading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PostLoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (status === "authenticated") {
      if (session?.user.publicId) router.push("/map");
      else router.push("/auth/onboarding");
    }
  }, [status, session, router]);

  return <Loading />;
}
