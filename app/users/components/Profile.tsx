"use client";

import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import FormInput from "@/components/common/FormInput";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { FormImageUpload } from "@/components/common/FormImageUpload";

interface profileProps {
  isMyAccount: boolean;
  memberTitle: string;
  userName: string;
}

export default function Profile({
  isMyAccount,
  memberTitle,
  userName,
}: profileProps) {
  const form = useForm({
    defaultValues: {
      nickName: "씩씩한 감자",
      profileImage: null,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex gap-2 px-6 items-center pb-[18px]">
      <Image
        src="/assets/images/example/default-profile.png"
        alt="프로필 이미지"
        width={46}
        height={46}
        className="rounded-full"
      />
      <div className="flex justify-between w-full">
        <div>
          <div className="text-sm/3.5 text-zinc-400">{memberTitle}</div>
          <div className="text-2xl/6 pt-1.5">{userName}</div>
        </div>
        {isMyAccount && (
          <Dialog onOpenChange={(open) => !open && form.reset()}>
            <DialogTrigger asChild>
              <Button variant="editProfile" size="xs">
                프로필 수정
              </Button>
            </DialogTrigger>
            <DialogContent>
              <VisuallyHidden>
                <DialogHeader>
                  <DialogTitle>프로필 수정 팝업</DialogTitle>
                  <DialogDescription>
                    프로필 이미지와 닉네임을 수정합니다.
                  </DialogDescription>
                </DialogHeader>
              </VisuallyHidden>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-4"
                >
                  <FormImageUpload
                    name="profileImage"
                    defaultImage="/assets/images/example/default-profile.png"
                  />
                  <FormInput
                    name="nickName"
                    label="닉네임"
                    placeholder="변경할 닉네임을 넣어주세요."
                    type="text"
                  />
                  <Button variant="joinFullBtn" size="full" type="submit">
                    프로필 수정하기
                  </Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
