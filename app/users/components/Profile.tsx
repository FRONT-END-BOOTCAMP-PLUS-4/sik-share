import { Button } from "@/components/ui/button";
import Image from "next/image";

interface profileProps {
  isMyAccount: boolean;
  memberTitle: string;
}

export default function Profile({ isMyAccount, memberTitle }: profileProps) {
  return (
    <div className="flex gap-2 px-6 items-center pb-[18px]">
      <Image
        src="/assets/images/example/default-profile.png"
        alt="프로필 이미지"
        width={46}
        height={46}
        className="rounded-full"
      />
      <div className="flex justify-between w-full">
        <div>
          <div className="text-sm/3.5 text-zinc-400">{memberTitle}</div>
          <div className="text-2xl/normal pt-1.5">싱그러운 새싹</div>
        </div>
        {isMyAccount && (
          <Button variant="editProfile" size="xs">
            프로필 수정
          </Button>
        )}
      </div>
    </div>
  );
}
