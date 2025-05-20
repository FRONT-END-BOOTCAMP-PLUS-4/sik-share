"use client";

import useShareItmes from "@/app/hooks/useShareItems";
import FormInput from "@/components/common/FormInput";
import Loading from "@/components/common/Loading";
import SubHeader from "@/components/common/SubHeader";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import FormDetail from "./components/FormDetail";
import FormSelect from "./components/FormSelect";
import { FormMultiImageUpload } from "./components/FormMultiImageUpload";

type ShareForm = {
  title: string;
  shareItem: number;
  description: string;
  locationNote: string;
  locationAddress: string;
  lat: number;
  lng: number;
  images: FileList | undefined;
};

export default function CreateSharePage() {
  const { shareItems, loading, error } = useShareItmes();
  const form = useForm<ShareForm>();

  if (error) return <p>{error}</p>;

  return (
    <>
      <SubHeader />
      <section>
        {loading ? (
          <Loading />
        ) : (
          <Form {...form}>
            <form>
              <FormMultiImageUpload name="images" />
              <FormInput
                name="title"
                label="제목"
                placeholder="ex. 양파 나눔해요"
              />
              <FormSelect
                name="shareItem"
                label="나눔 품목"
                placeholder="나누고 싶은 품목을 선택해 주세요."
                options={shareItems.map((item) => ({
                  label: item.name,
                  value: item.id,
                }))}
              />
              <FormDetail
                name="description"
                label="자세한 설명"
                placeholder={`나누미들에게 보여질 자세한 내용을 작성해주세요.\n\nex. 엄마가 주신 양파가 너무 많아서 나눔해요!\n저녁 6시 이후에만 가능해요. 유통기한은 모르겠어요ㅠ`}
              />
              <FormInput
                name="address"
                label="나눔 희망 장소"
                placeholder="+ 위치 추가"
                readOnly
                onClick={() => console.log("클릭")}
                inputClassName="cursor-pointer bg-gray-50 hover:bg-gray-100"
              />
            </form>
          </Form>
        )}
      </section>
    </>
  );
}
