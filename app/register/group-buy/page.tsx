"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/common/FormInput";
import SubHeader from "@/components/common/SubHeader";
import type { LocationData } from "@/types/types";
import FormMultiImageUpload from "@/components/common/register/FormMultiImageUpload";
import FormCalendar from "@/components/common/register/FormCalendar";
import FormDetail from "@/components/common/register/FormDetail";
import LocationSelectModal from "@/components/common/register/LocationSelectModal";
import FormButton from "@/components/common/register/FormButton";

type GroupBuyForm = {
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

export default function CreateGroupBuyPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const userId = session?.user.id;

  const form = useForm<GroupBuyForm>({
    mode: "onSubmit",
    defaultValues: {
      title: "",
      description: "",
      lat: 0,
      lng: 0,
      neighborhoodName: "",
      locationNote: "",
      capacity: "",
      desiredItem: "",
      meetingDate: "",
      images: [],
    },
  });

  const [showMapModal, setShowMapModal] = useState(false);

  const onSubmit = async () => {
    try {
      const values = form.getValues();

      const formData = new FormData();
      formData.append("organizerId", userId!);
      formData.append("title", values.title);
      formData.append("locationNote", values.locationNote);
      formData.append("neighborhoodName", values.neighborhoodName);
      formData.append("lat", String(values.lat));
      formData.append("lng", String(values.lng));
      formData.append("description", values.description);
      formData.append("capacity", String(values.capacity));
      formData.append("desiredItem", values.desiredItem);
      formData.append("meetingDate", String(values.meetingDate));

      for (const image of values.images) {
        formData.append("images", image);
      }

      const res = await fetch("/api/group-buys", {
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

      toast.success("같이 장보기가 등록되었습니다", {
        duration: 2000,
        onAutoClose: () => {
          router.back();
        },
      });
      router.back();
    } catch (error) {
      console.error("장보기 등록 중 오류 발생:", error);
      toast.error("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <SubHeader titleText="같이 장보기 등록하기" iconType="close" />
      <section className="h-[calc(100vh-124px)] py-6 px-4">
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
              rules={{
                required: "모집 인원을 적어주세요.",
                validate: (v) => {
                  const num = Number(v);
                  if (num < 2) return "최소 2명 이상이어야 해요.";
                  if (num > 4) return "최대 4명까지만 가능합니다.";
                  return true;
                },
              }}
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
            <FormButton onClick={() => {}}>작성 완료</FormButton>
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
    </>
  );
}
