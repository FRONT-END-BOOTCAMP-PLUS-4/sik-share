"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import FormInput from "@/components/common/FormInput";
import Loading from "@/components/common/Loading";
import SubHeader from "@/components/common/SubHeader";
import { Form } from "@/components/ui/form";
import type { LocationData } from "@/types/types";
import useShareItmes from "./hooks/useShareItems";
import FormDetail from "@/components/common/register/FormDetail";
import FormSelect from "@/components/common/register/FormSelect";
import FormMultiImageUpload from "@/components/common/register/FormMultiImageUpload";
import LocationSelectModal from "@/components/common/register/LocationSelectModal";
import FormButton from "@/components/common/register/FormButton";

type ShareForm = {
  title: string;
  shareItem: number | undefined;
  description: string;
  locationNote: string;
  locationAddress: string;
  lat: number;
  lng: number;
  images: File[];
};

export default function CreateSharePage() {
  const router = useRouter();
  const { data: session } = useSession();

  const userId = session?.user.id;

  const { shareItems, loading, error } = useShareItmes(); //에러는 토스트로
  const form = useForm<ShareForm>({
    mode: "onSubmit",
    defaultValues: {
      title: "",
      shareItem: undefined,
      description: "",
      locationNote: "",
      locationAddress: "",
      lat: 0,
      lng: 0,
      images: [],
    },
  });

  const [showMapModal, setShowMapModal] = useState(false);

  const onSubmit = async () => {
    try {
      const values = form.getValues();

      const formData = new FormData();
      formData.append("shareItemId", String(values.shareItem));
      formData.append("ownerId", userId!);
      formData.append("title", values.title);
      formData.append("locationNote", values.locationNote);
      formData.append("locationAddress", values.locationAddress);
      formData.append("lat", String(values.lat));
      formData.append("lng", String(values.lng));
      formData.append("description", values.description);

      for (const image of values.images) {
        formData.append("images", image);
      }

      const res = await fetch("/api/shares", {
        method: "POST",
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

      toast.success("나눔이 등록되었습니다", {
        duration: 2000,
        onAutoClose: () => {
          router.back();
        },
      });
      router.back();
    } catch (error) {
      console.error("나눔 등록 중 오류 발생:", error);
      toast.error("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <SubHeader titleText="나눔 등록하기" iconType="close" />
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
                  label="나눔 품목"
                  placeholder="나누고 싶은 품목을 선택해주세요."
                  options={shareItems.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
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
                <FormButton onClick={() => {}}>작성 완료</FormButton>
              </form>
            </Form>
          </section>
        </>
      )}
      {showMapModal && (
        <LocationSelectModal
          onClose={() => setShowMapModal(false)}
          onConfirm={(locationData: LocationData) => {
            form.setValue("locationAddress", locationData.locationAddress);
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
