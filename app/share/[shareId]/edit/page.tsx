"use client";

import useShareItmes from "@/app/register/share/hooks/useShareItems";
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
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

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

const images = [
  "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/share/share_15_0.JPG",
];

export default function ShareEditPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const userId = session?.user.id;

  const { shareItems, loading: shareItemsLoading, error } = useShareItmes();
  const { files, loading: filesLoading } = usePreloadedImageFiles(images);
  const form = useForm<ShareEditForm>({
    mode: "onSubmit",
    defaultValues: {
      shareItem: 5,
      title: "계란 나눠요~!",
      description: `계란 나눔합니다.\n어제 샀는데 잠시 본가에 내려가 있을 예정이라 나눠요~!\n저녁 6시 이후 아무 때나 좋아요`,
      neighborhoodName: "청룡동",
      locationNote: "관악 소방서 앞",
      lat: 37.47426560506256,
      lng: 126.9526147439166,
      images: files,
    },
  });

  const [showMapModal, setShowMapModal] = useState(false);

  useEffect(() => {
    if (!filesLoading && files && files.length > 0) {
      form.reset({
        ...form.getValues(),
        images: files,
      });
    }
  }, [files, filesLoading]);

  const onSubmit = async () => {
    try {
      const values = form.getValues();
      console.log(values);
    } catch (error) {
      console.error("나눔 수정 중 오류 발생:", error);
      toast.error("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      {shareItemsLoading || filesLoading ? (
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
                  disabled={true}
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
