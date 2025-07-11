"use client";

import { useEffect, useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Loading from "@/components/common/Loading";
import { getScoreVisual } from "@/app/users/utils";
import UsersNav, { type shortReview } from "@/app/users/components/UsersNav";
import Profile from "@/app/users/components/Profile";
import UserLocation from "@/app/users/components/UserLocation";
import ShareScore from "@/app/users/components/ShareScore";
import MyCharacter from "@/app/users/components/MyCharacter";
import ShareBoxButton from "@/app/users/components/ShareBoxButton";
import { useUserInfo } from "@/app/users/hooks/useUserInfo";
import { cn } from "@/lib/utils";

interface User {
  neighborhoodName: string;
  nickName: string;
  profileUrl: string;
  score: number;
}

export default function userPage() {
  const { publicId, isMyAccount } = useUserInfo();

  const [user, setUser] = useState<User | null>(null);
  const [shortReviews, setShortReviews] = useState<shortReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await fetch(`/api/users?id=${publicId}`, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("유저 정보 조회 실패");
        const data = await res.json();

        setUser(data.result.profile);
        setShortReviews(data.result.shortReview);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [publicId]);

  if (loading) return <Loading />;
  if (!user) return <div>유저 정보를 찾을 수 없습니다.</div>;

  const levelbyScore = getScoreVisual(user.score);

  return (
    <>
      <Header />
      <div className={`h-[calc(100svh-108px)] grade-${levelbyScore.grade}`}>
        <section className="h-1/2 relative">
          <div className="w-full absolute px-4 py-6 z-5">
            <div
              className={cn(
                "flex items-center justify-end",
                !isMyAccount && "justify-between",
              )}
            >
              {!isMyAccount && <ShareBoxButton publicId={publicId} />}
              <UserLocation
                isMyAccount={isMyAccount}
                location={user.neighborhoodName}
              />
            </div>
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
          <UsersNav
            isMyAccount={isMyAccount}
            publicId={publicId as string}
            shortReviews={shortReviews}
          />
        </section>
      </div>
      <Footer />
    </>
  );
}
