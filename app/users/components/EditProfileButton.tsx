"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import FormInput from "@/components/common/FormInput";
import { Form } from "@/components/ui/form";
import { FormImageUpload } from "@/components/common/FormImageUpload";
import { useAuthStore } from "@/store/authStore";
import DropdownButton, {
  type DropdownOption,
} from "@/components/common/DropdownButton";

export interface EditProfileButtonProps {
  userName: string;
  profileImage: string;
}

export default function EditProfileButton({
  userName,
  profileImage,
}: EditProfileButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const options: DropdownOption[] = [
    {
      id: "edit-profile",
      label: "프로필 수정",
      onClick: () => {
        setIsDialogOpen(true);
      },
    },
    {
      id: "logout",
      label: "로그아웃",
      onClick: () => {
        signOut({
          callbackUrl: "/",
        });
      },
    },
  ];

  const userPublicId = useAuthStore((state) => state.publicId);
  const form = useForm<{
    nickName: string;
    profileImage: FileList | undefined;
  }>({
    defaultValues: {
      nickName: `${userName}`,
      profileImage: undefined,
    },
  });

  const onSubmit = async () => {
    const fileList = form.watch("profileImage");
    const selectedFile = fileList?.[0];

    const formData = new FormData();
    formData.append("userPublicId", String(userPublicId));
    formData.append("nickName", form.getValues("nickName"));
    formData.append("currentImageUrl", profileImage);
    if (selectedFile) {
      formData.append("newImageFile", selectedFile);
    }

    const res = await fetch("/api/users/update", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    if (result.success) {
      setIsDialogOpen(false);
      alert("프로필 수정이 완료되었습니다.");
      form.reset();
    } else {
      alert("프로필 수정에 실패했습니다.");
    }
  };

  return (
    <>
      <DropdownButton options={options} type="editProfile" align="bottom" />
      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) form.reset();
        }}
      >
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
                defaultImage={profileImage}
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
    </>
  );
}
