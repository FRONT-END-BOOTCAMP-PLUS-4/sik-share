"use client";

import FormInput from "@/components/common/FormInput";
import Loading from "@/components/common/Loading";
import FormButton from "@/components/common/register/FormButton";
import FormDetail from "@/components/common/register/FormDetail";
import FormMultiImageUpload from "@/components/common/register/FormMultiImageUpload";
import FormSelect from "@/components/common/register/FormSelect";
import LocationSelectModal from "@/components/common/register/LocationSelectModal";
import SubHeader from "@/components/common/SubHeader";
import { Form } from "@/components/ui/form";
import usePreloadedImageFiles from "@/hooks/usePreloadedImageFiles";
import type { LocationData } from "@/types/types";
import { notFound, useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useShareFormDetail from "./hooks/useShareFormDetail";
import { HttpError } from "@/errors/HttpError";

type ShareEditForm = {
  shareItem: number;
  title: string;
  description: string;
  neighborhoodName: string;
  locationNote: string;
  lat: number;
  lng: number;
  images: File[];
};

export default function ShareEditPage() {
  const router = useRouter();
  const { shareId } = useParams<{ shareId: string }>();

  const {
    shareFormDetail,
    loading: detailLoading,
    error,
  } = useShareFormDetail(Number(shareId));

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
    if (shareFormDetail?.images) {
      setImagesToLoad(shareFormDetail.images);
    }
  }, [shareFormDetail]);

  const { files, loading: filesLoading } = usePreloadedImageFiles(imagesToLoad);

  const form = useForm<ShareEditForm>({
    mode: "onSubmit",
    defaultValues: {
      shareItem: 1,
      title: "",
      description: "",
      neighborhoodName: "",
      locationNote: "",
      lat: 0,
      lng: 0,
      images: [],
    },
  });

  useEffect(() => {
    if (
      !filesLoading &&
      !detailLoading &&
      shareFormDetail &&
      files.length > 0
    ) {
      form.reset({
        shareItem: 1,
        title: shareFormDetail.title,
        description: shareFormDetail.description,
        neighborhoodName: shareFormDetail.neighborhoodName,
        locationNote: shareFormDetail.locationNote,
        lat: shareFormDetail.lat,
        lng: shareFormDetail.lng,
        images: files,
      });
    }
  }, [filesLoading, detailLoading, shareFormDetail, files, form]);

  const onSubmit = async () => {
    try {
      const values = form.getValues();

      const formData = new FormData();
      formData.append("shardId", shareId);
      formData.append("title", values.title);
      formData.append("lat", String(values.lat));
      formData.append("lng", String(values.lng));
      formData.append("neighborhoodName", values.neighborhoodName);
      formData.append("locationNote", values.locationNote);
      formData.append("description", values.description);

      for (const image of values.images) {
        formData.append("images", image);
      }

      const res = await fetch(`/api/shares/${shareId}`, {
        method: "PATCH",
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        const message =
          errorData?.message ||
          "알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
        toast.error(message);
        return;
      }

      toast.success("나눔이 수정되었습니다", {
        duration: 2000,
        onAutoClose: () => {
          router.back();
        },
      });
      router.back();
    } catch (error) {
      console.error("나눔 수정 중 오류 발생:", error);
      toast.error("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      {filesLoading || detailLoading || !shareFormDetail ? (
        <Loading />
      ) : (
        <>
          <SubHeader titleText="나눔 수정하기" iconType="close" />
          <section className="h-[calc(100vh-124px)] py-6 px-4">
            <Form {...form}>
              <form
                className="flex flex-col gap-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormMultiImageUpload
                  name="images"
                  rules={{ required: "사진을 넣어주세요." }}
                />
                <FormInput
                  name="title"
                  label="제목"
                  placeholder="ex. 양파 나눔해요"
                  rules={{ required: "제목을 적어주세요." }}
                />
                <FormSelect
                  name="shareItem"
                  disabled
                  label="나눔 품목"
                  placeholder="나누고 싶은 품목을 선택해주세요."
                  options={[
                    { label: shareFormDetail?.shareItem || "", value: 1 },
                  ]}
                  rules={{ required: "나눔 품목을 선택해주세요." }}
                />
                <FormDetail
                  name="description"
                  label="자세한 설명"
                  placeholder={`나누미들에게 보여질 자세한 내용을 작성해주세요.\n\nex. 엄마가 주신 양파가 너무 많아서 나눔해요!\n저녁 6시 이후에만 가능해요. 유통기한은 모르겠어요ㅠ`}
                  rules={{ required: "자세한 설명을 적어주세요." }}
                />
                <FormInput
                  name="locationNote"
                  label="나눔 희망 장소"
                  placeholder="+ 위치 추가"
                  readOnly
                  onClick={() => setShowMapModal(true)}
                  inputClassName="cursor-pointer"
                  rules={{ required: "나눔 희망 장소를 설정해주세요." }}
                />
                <FormButton onClick={() => {}}>수정 완료</FormButton>
              </form>
            </Form>
          </section>
        </>
      )}
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
    </>
  );
}
