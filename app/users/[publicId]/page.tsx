import { MapPin, PiggyBank } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getScoreVisual } from "@/app/users/utils";
import HistoryNav from "@/app/users/components/UsersNav";
import Profile from "@/app/users/components/Profile";

export default function userPage() {
  const isMyAccount = true;
  const levelbyScore = getScoreVisual(19.6);

  return (
    <section className={`grade-${levelbyScore.grade}`}>
      <div className="px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <PiggyBank size={18} />
            <div className="text-base/6">1,080P</div>
          </div>
          <Badge variant="locate">
            <MapPin size={14} strokeWidth={2} />
            낙성대동
          </Badge>
        </div>
        <div className="h-[150px] flex items-center justify-center">3D</div>
        <div className="pl-2">
          <div className="text-xs/3 pb-2">나눔지수</div>
          <div className="flex items-baseline">
            <div className="text-3xl/7.5">19.6</div>
            <div className="text-xl/5 font-bold">°C</div>
          </div>
        </div>
      </div>
      <div className="pt-6 bg-white rounded-t-[50px]">
        <Profile
          isMyAccount={isMyAccount}
          memberTitle={levelbyScore.memberBadge}
        />
        <HistoryNav publicId="1" />
      </div>
    </section>
  );
}
