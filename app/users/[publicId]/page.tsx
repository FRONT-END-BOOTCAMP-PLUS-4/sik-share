"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getScoreVisual } from "@/app/users/utils";
import UsersNav from "@/app/users/components/UsersNav";
import Profile from "@/app/users/components/Profile";
import UserLocation from "@/app/users/components/UserLocation";
import ShareScore from "@/app/users/components/ShareScore";
import MyCharacter from "@/app/users/components/MyCharacter";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

interface User {
  neighborhoodName: string;
  nickName: string;
  profileUrl: string;
  score: number;
}

export default function userPage() {
  const params = useParams();
  const publicId = params.publicId;
  const { data: session, status } = useSession();
  const myPublicId = session?.user.publicId;

  const isMyAccount =
    status === "authenticated" && String(myPublicId) === publicId;

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await fetch(`/api/users?id=${publicId}`, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("유저 정보 조회 실패");
        const data = await res.json();
        setUser(data.userProfile);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [publicId]);

  if (loading) return <div>로딩 중...</div>;
  if (!user) return <div>유저 정보를 찾을 수 없습니다.</div>;

  const levelbyScore = getScoreVisual(user.score);

  return (
    <>
      <Header />
      <div className={`h-[calc(100vh-108px)] grade-${levelbyScore.grade}`}>
        <section className="h-1/2 px-4 py-6">
          <div className="flex justify-end items-center">
            {/* <MyPoint /> */}
            <UserLocation
              isMyAccount={isMyAccount}
              location={user.neighborhoodName}
            />
          </div>
          <MyCharacter grade={levelbyScore.grade} />
          <ShareScore score={user.score} />
        </section>
        <section className="h-1/2 pt-6 bg-white rounded-t-[50px]">
          <Profile
            isMyAccount={isMyAccount}
            memberTitle={levelbyScore.memberBadge}
            userName={user.nickName}
            profileImage={user.profileUrl}
          />
          <UsersNav publicId={publicId as string} />
        </section>
      </div>
      <Footer />
    </>
  );
}
