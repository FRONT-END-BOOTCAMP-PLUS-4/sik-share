"use client";

export const dynamic = "force-dynamic";

import FormDetail from "@/components/common/register/FormDetail";
import SubHeader from "@/components/common/SubHeader";
import { Form } from "@/components/ui/form";
import { useSession } from "next-auth/react";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import useShortReviewOptions from "./hooks/useShortReviewOptions";
import Loading from "@/components/common/Loading";
import FormButton from "@/components/common/register/FormButton";
import FormRatingSelector from "./components/FormRatingSelector";
import FormCheckbox from "@/components/common/register/FormCheckbox";
import { toast } from "sonner";
import useValidateReviewWritable from "./hooks/useValidateReviewWritable";
import { useState } from "react";

type ReviewForm = {
  grade: number;
  shortReviews: number[];
  content: string;
};

const ratingOptions = [
  {
    label: "별로예요",
    value: 0,
    imgSrc: "/assets/images/review-ratings/bad.svg",
    selectedImgSrc: "/assets/images/review-ratings/bad_selected.svg",
  },
  {
    label: "좋아요",
    value: 1,
    imgSrc: "/assets/images/review-ratings/good.svg",
    selectedImgSrc: "/assets/images/review-ratings/good_selected.svg",
  },
  {
    label: "최고예요",
    value: 2,
    imgSrc: "/assets/images/review-ratings/great.svg",
    selectedImgSrc: "/assets/images/review-ratings/great_selected.svg",
  },
];

export default function CreateReviewPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();

  const shareId = searchParams.get("shareId");
  const userId = session?.user.id;
  if (!shareId) notFound();

  const {
    shortReviewOptions,
    loading: reviewOptionLoading,
    error,
  } = useShortReviewOptions();
  const {
    recipientId,
    recipientNickname,
    loading: validationLoading,
  } = useValidateReviewWritable(Number(shareId), userId);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ReviewForm>({
    mode: "onSubmit",
    defaultValues: {
      grade: undefined,
      shortReviews: [],
      content: "",
    },
  });

  const onSubmit = async () => {
    try {
      setIsSubmitting(true);
      const values = form.getValues();

      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          shareId,
          recipientId,
          writerId: userId,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        const message =
          errorData?.message ||
          "알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";

        toast.error(message);
        setIsSubmitting(false);
        return;
      }

      toast.success("후기가 등록되었습니다.", {
        duration: 2000,
        onAutoClose: () => {
          router.replace("/map");
        },
      });
    } catch (error) {
      console.error("후기 등록 중 오류 발생:", error);
      toast.error("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {reviewOptionLoading || validationLoading || !recipientNickname ? (
        <Loading />
      ) : (
        <>
          <SubHeader
            DescTitleText={`${recipientNickname}님과의
        나눔은 어땠나요?`}
            DescSubText="남겨주신 후기는 상대방의 프로필에 공개돼요."
          />
          <section className="h-[calc(100vh-170px)] py-6 px-4">
            <Form {...form}>
              <form
                className="flex flex-col gap-6"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormRatingSelector
                  name="grade"
                  options={ratingOptions}
                  rules={{ required: "평점을 선택해주세요." }}
                />
                <FormCheckbox
                  name="shortReviews"
                  label="어떤 점이 좋았나요?"
                  options={shortReviewOptions}
                  rules={{ required: "최소 하나는 선택해주세요." }}
                />
                <FormDetail
                  name="content"
                  label="따뜻한 나눔 경험을 공유해주세요!"
                  placeholder="여기에 적어주세요. (선택사항)"
                  labelClassName="font-bold"
                />
                <FormButton disabled={isSubmitting}>작성 완료</FormButton>
              </form>
            </Form>
          </section>
        </>
      )}
    </>
  );
}
