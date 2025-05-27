"use client";

import SubHeader from "@/components/common/SubHeader";
import ReviewListItem from "@/app/users/components/ReviewListItem";
import { useUserInfo } from "@/app/users/hooks/useUserInfo";
import { useTotalCounts } from "@/app/users/hooks/useTotalCounts";

export default function Reviews() {
  const { publicId } = useUserInfo();
  const { counts } = useTotalCounts({
    publicId,
    type: "review",
    tabType: "review",
  });
  const data = [
    {
      id: "diddididcsfdm",
      nickName: "씩씩한 감자",
      profileImgUrl: "/assets/images/example/default-profile.png",
      shareScore: 19.5,
      detailReview: "너무 친절해서 감동이었어요",
    },
    {
      id: "diddidfffdcsfdm",
      nickName: "착한 양파",
      profileImgUrl: "/assets/images/example/thumbnail.png",
      shareScore: 30.5,
      detailReview: "좋은 재료를 나눔 받았어요 감사합니다!",
    },
  ];

  return (
    <>
      <SubHeader titleText="후기" />
      <div className="pt-7 px-4">
        <div className="text-right body-sm text-zinc-600">
          총 받은 후기
          <span className="text-primary pl-1">{counts.review}</span>
        </div>
        <ul className="flex flex-col gap-4">
          {data.map((item) => (
            <ReviewListItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </>
  );
}
