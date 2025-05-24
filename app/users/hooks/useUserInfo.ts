"use client";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

export function useUserInfo() {
  const params = useParams();
  const publicId = params.publicId;
  const { data: session, status } = useSession();
  const myPublicId = session?.user.publicId;
  const id = session?.user.id;

  console.log(publicId, myPublicId, id);

  const isMyAccount =
    status === "authenticated" && String(myPublicId) === publicId;

  return {publicId, isMyAccount, id};
}