"use client";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

export function useUserInfo() {
  const params = useParams();
  const publicId = params.publicId as string;
  const { data: session, status } = useSession();
  const myPublicId = session?.user.publicId;

  const isMyAccount =
    status === "authenticated" && String(myPublicId) === publicId;

  return {publicId, isMyAccount};
}