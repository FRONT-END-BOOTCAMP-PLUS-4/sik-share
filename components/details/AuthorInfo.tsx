import Image from "next/image";
import { AvatarGroup } from "./AvatarGroup";
import Link from "next/link";

interface AuthorInfoProps {
  variant: "share" | "groupbuy";
  nickname: string;
  profileUrl: string;
  shareScore: number;
  id: string;
  numberOfParticipants?: number;
  capacity?: number;
  participantProfileUrls?: string[];
}

export function AuthorInfo({
  variant,
  nickname,
  profileUrl,
  shareScore,
  id,
  numberOfParticipants,
  capacity,
  participantProfileUrls,
}: AuthorInfoProps) {
  return (
    <section className="flex justify-between items-center mt-4 pb-2 border-b">
      <Link href={`/users/${id}`} className="flex justify-between items-center">
        <div className="flex w-full">
          <Image
            src={profileUrl}
            alt="프로필 이미지"
            width={38}
            height={38}
            className="w-[38px] h-[38px] object-cover rounded-full"
          />
          <div className="flex flex-col ml-2">
            <p className="body-md">{nickname}</p>
            <p className="text-[12px] text-primary">{shareScore}°C</p>
          </div>
        </div>
      </Link>
      <div className="flex justify-end items-end">
        {variant === "groupbuy" &&
          numberOfParticipants &&
          capacity &&
          participantProfileUrls && (
            <AvatarGroup
              count={numberOfParticipants}
              capacity={capacity}
              participantProfileUrls={participantProfileUrls}
            />
          )}
      </div>
    </section>
  );
}
