"use client";

import { notFound, useParams, useRouter } from "next/navigation";
import useGroupBuyFormDetail from "./hooks/useGroupBuyFormDetail";
import { useEffect, useState } from "react";
import { HttpError } from "@/errors/HttpError";
import usePreloadedImageFiles from "@/hooks/usePreloadedImageFiles";
import { useForm } from "react-hook-form";
import Loading from "@/components/common/Loading";
import SubHeader from "@/components/common/SubHeader";
import { Form } from "@/components/ui/form";
import FormMultiImageUpload from "@/components/common/register/FormMultiImageUpload";
import LocationSelectModal from "@/components/common/register/LocationSelectModal";
import type { LocationData } from "@/types/types";
import FormButton from "@/components/common/register/FormButton";
import FormInput from "@/components/common/FormInput";
import FormDetail from "@/components/common/register/FormDetail";
import FormCalendar from "@/components/common/register/FormCalendar";
import { toast } from "sonner";

type GroupBuyEditForm = {
  title: string;
  description: string;
  lat: number;
  lng: number;
  neighborhoodName: string;
  locationNote: string;
  capacity: number | string;
  desiredItem: string;
  meetingDate: Date | string;
  images: File[];
};

export default function GroupBuyEditPage() {
  const router = useRouter();
  const { groupBuyId } = useParams<{ groupBuyId: string }>();

  const {
    groupBuyFormDetail,
    loading: detailLoading,
    error,
  } = useGroupBuyFormDetail(Number(groupBuyId));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [imagesToLoad, setImagesToLoad] = useState<string[]>([]);
  const [showMapModal, setShowMapModal] = useState(false);

  useEffect(() => {
    if (error instanceof HttpError) {
      if (error.status === 403) {
        router.replace("/forbidden");
      } else if (error.status === 404) {
        notFound();
      }
    }
  }, [error, router]);

  useEffect(() => {
    if (groupBuyFormDetail?.images) {
      setImagesToLoad(groupBuyFormDetail.images);
    }
  }, [groupBuyFormDetail]);

  const { files, loading: filesLoading } = usePreloadedImageFiles(imagesToLoad);

  const form = useForm<GroupBuyEditForm>({
    mode: "onSubmit",
    defaultValues: {
      title: "",
      description: "",
      lat: 0,
      lng: 0,
      neighborhoodName: "",
      locationNote: "",
      capacity: 0,
      desiredItem: "",
      meetingDate: "",
      images: [],
    },
  });

  useEffect(() => {
    if (!filesLoading && !detailLoading && groupBuyFormDetail) {
      form.reset({
        title: groupBuyFormDetail.title,
        description: groupBuyFormDetail.description,
        lat: groupBuyFormDetail.lat,
        lng: groupBuyFormDetail.lng,
        neighborhoodName: groupBuyFormDetail.neighborhoodName,
        locationNote: groupBuyFormDetail.locationNote,
        capacity: groupBuyFormDetail.capacity,
        desiredItem: groupBuyFormDetail.desiredItem,
        meetingDate: groupBuyFormDetail.meetingDate,
        images: files,
      });
    }
  }, [filesLoading, detailLoading, groupBuyFormDetail, files, form]);

  const onSubmit = async () => {
    try {
      setIsSubmitting(true);
      const values = form.getValues();

      const formData = new FormData();
      formData.append("groupBuyId", groupBuyId);
      formData.append("title", values.title);
      formData.append("lat", String(values.lat));
      formData.append("lng", String(values.lng));
      formData.append("neighborhoodName", values.neighborhoodName);
      formData.append("locationNote", values.locationNote);
      formData.append("description", values.description);
      formData.append("desiredItem", values.desiredItem);
      formData.append("meetingDate", String(values.meetingDate));

      for (const image of values.images) {
        formData.append("images", image);
      }

      const res = await fetch(`/api/group-buys/${groupBuyId}`, {
        method: "PATCH",
        body: formData,
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

      toast.success("장보기가 수정되었습니다", {
        duration: 1000,
        onAutoClose: () => {
          router.back();
        },
      });
    } catch (error) {
      console.error("장보기 수정 중 오류 발생:", error);
      toast.error("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {filesLoading || detailLoading || !groupBuyFormDetail ? (
        <Loading />
      ) : (
        <div className="relative h-svh flex flex-col">
          <SubHeader titleText="같이 장보기 수정하기" iconType="close" />
          <section className="flex-1 pb-[88px] py-6 px-4 overflow-auto scrollbar-hide">
            <Form {...form}>
              <form
                className="flex flex-col gap-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormMultiImageUpload name="images" />
                <FormInput
                  name="title"
                  label="제목"
                  placeholder="ex. 같이 장 보러 가실 분!"
                  rules={{ required: "제목을 적어주세요." }}
                />
                <FormInput
                  name="desiredItem"
                  label="구매 희망 물품"
                  placeholder="ex. 양파, 토마토 등"
                  rules={{ required: "구매 희망 물품을 적어주세요." }}
                  inputClassName="placehoder:font-light"
                />
                <FormInput
                  type="number"
                  name="capacity"
                  label="모집인원"
                  inputClassName="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  disabled={true}
                  suffix="명"
                />
                <FormCalendar
                  name="meetingDate"
                  label="만남 날짜"
                  rules={{
                    required: "만남 날짜를 선택해주세요.",
                    validate: (value) => {
                      if (!value) return "만남 날짜를 선택해주세요.";
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      if (value < today)
                        return "오늘 이후 날짜만 선택할 수 있어요.";
                      return true;
                    },
                  }}
                />
                <FormDetail
                  name="description"
                  label="자세한 설명"
                  placeholder={`나누미들에게 보여질 자세한 내용을 작성해주세요.\n\nex. 사과가 박스로 특가 세일 중이라는데, 같이 가서 나누실 분 구합니다. 오후 3시 이후로 만나요!`}
                  rules={{ required: "자세한 설명을 적어주세요." }}
                />
                <FormInput
                  name="locationNote"
                  label="나눔 희망 장소"
                  placeholder="+ 위치 추가"
                  readOnly
                  onClick={() => setShowMapModal(true)}
                  inputClassName="cursor-pointer"
                  rules={{ required: "장보기 희망 장소를 설정해주세요." }}
                />
                <FormButton disabled={isSubmitting}>수정 완료</FormButton>
              </form>
            </Form>
          </section>
          {showMapModal && (
            <LocationSelectModal
              onClose={() => setShowMapModal(false)}
              onConfirm={(locationData: LocationData) => {
                form.setValue("neighborhoodName", locationData.locationAddress);
                form.setValue("locationNote", locationData.locationNote);
                form.setValue("lat", locationData.lat!);
                form.setValue("lng", locationData.lng!);
                form.trigger("locationNote");
                setShowMapModal(false);
              }}
            />
          )}
        </div>
      )}
    </>
  );
}
