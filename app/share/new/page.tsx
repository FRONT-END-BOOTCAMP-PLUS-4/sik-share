"use client";

import useShareItmes from "@/app/hooks/useShareItems";
import FormInput from "@/components/common/FormInput";
import Loading from "@/components/common/Loading";
import SubHeader from "@/components/common/SubHeader";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import FormDetail from "./components/FormDetail";
import FormSelect from "./components/FormSelect";
import FormMultiImageUpload from "./components/FormMultiImageUpload";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import LocationSelectModal from "./components/LocationSelectModal";
import type { LocationData } from "@/types/types";

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
  const { shareItems, loading, error } = useShareItmes(); //에러는 토스트로
  const form = useForm<ShareForm>({
    mode: "onBlur",
    defaultValues: {
      title: "",
      shareItem: -1,
      description: "",
      locationNote: "",
      locationAddress: "",
      lat: 0,
      lng: 0,
      images: [],
    },
  });

  const [showMapModal, setShowMapModal] = useState(false);

  const onSubmit = (data: ShareForm) => {
    console.log(data);
  };

  return (
    <>
      <SubHeader titleText="나눔 등록하기" iconType="close" />
      {loading ? (
        <Loading />
      ) : (
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
              <div className="absolute left-0 bottom-0 z-50 w-full py-3 px-4 bg-white border-t-1 border-zinc-300">
                <Button variant="joinFullBtn" size="lg">
                  작성 완료
                </Button>
              </div>
            </form>
          </Form>
        </section>
      )}
      {showMapModal && (
        <LocationSelectModal
          onClose={() => setShowMapModal(false)}
          onConfirm={(locationData: LocationData) => {
            form.setValue("locationAddress", locationData.locationAddress);
            form.setValue("locationNote", locationData.locationNote);
            form.setValue("lat", locationData.lat!);
            form.setValue("lng", locationData.lng!);
            setShowMapModal(false);
          }}
        />
      )}
    </>
  );
}
