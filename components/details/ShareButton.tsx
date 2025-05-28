"use client";

import Image from "next/image";
import { useEffect } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  FacebookIcon,
  LineIcon,
  XIcon,
} from "react-share";
import { Link } from "lucide-react";
import { toast } from "sonner";

const SHARE_TITLE = "식샤 그룹모임에 함께해요!";
const SHARE_IMAGE = "";

export default function SharePanel() {
  const url = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_MAP_KEY);
    }
  }, []);

  const handleKakaoShare = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: SHARE_TITLE,
        imageUrl: SHARE_IMAGE,
        description: "근처 이웃과 식재료를 나누어요!",
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: "모임 참여하기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      toast("공유 링크가 복사되었습니다.");
    });
  };

  return (
    <div className="flex gap-3 items-center p-2">
      <button
        onClick={handleCopyLink}
        type="button"
        className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
      >
        <Link size={16} />
      </button>

      <button
        onClick={handleKakaoShare}
        type="button"
        className="cursor-pointer w-8 h-8"
      >
        <Image
          width={32}
          height={32}
          alt="카카오톡 공유하기"
          src="/assets/images/social/kakao.svg"
        />
      </button>

      <LineShareButton url={url} title={SHARE_TITLE}>
        <LineIcon size={32} round />
      </LineShareButton>

      <FacebookShareButton url={url} title={SHARE_TITLE}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={SHARE_TITLE}>
        <XIcon size={32} round />
      </TwitterShareButton>
    </div>
  );
}
