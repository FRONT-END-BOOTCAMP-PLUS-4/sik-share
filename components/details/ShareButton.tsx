"use client";

import Image from "next/image";
import { useEffect } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  LineShareButton,
  FacebookIcon,
  TelegramIcon,
  LineIcon,
  XIcon,
} from "react-share";

const SHARE_TITLE = "식샤 그룹모임에 함께해요!";
const SHARE_IMAGE = "이미지를 넣어보자";

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
        description: "근처 이웃과 식재료를 나누어요!",
        imageUrl: SHARE_IMAGE,
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

  return (
    <div className="flex gap-3 items-center p-2">
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

      <FacebookShareButton url={url}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={SHARE_TITLE}>
        <XIcon size={32} round />
      </TwitterShareButton>

      <TelegramShareButton url={url} title={SHARE_TITLE}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>

      <LineShareButton url={url} title={SHARE_TITLE}>
        <LineIcon size={32} round />
      </LineShareButton>
    </div>
  );
}
