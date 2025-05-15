import { getScoreVisual } from "@/app/users/utils";
import UsersNav from "@/app/users/components/UsersNav";
import Profile from "@/app/users/components/Profile";
import UserLocation from "../components/UserLocation";
import ShareScore from "../components/ShareScore";
import MyCharacter from "../components/MyCharacter";

export default function userPage() {
  const isMyAccount = true;
  const levelbyScore = getScoreVisual(19.6);

  return (
    <div className={`h-[calc(100vh-108px)] grade-${levelbyScore.grade}`}>
      <section className="h-1/2 px-4 py-6">
        <div className="flex justify-end items-center">
          {/* <MyPoint /> */}
          <UserLocation />
        </div>
        <MyCharacter grade={levelbyScore.grade} />
        <ShareScore score={19.6} />
      </section>
      <section className="h-1/2 pt-6 bg-white rounded-t-[50px]">
        <Profile
          isMyAccount={isMyAccount}
          memberTitle={levelbyScore.memberBadge}
        />
        <UsersNav publicId="1" />
      </section>
    </div>
  );
}
