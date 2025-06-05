"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { signOut, useSession } from "next-auth/react";
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
import DropdownButton, {
  type DropdownOption,
} from "@/components/common/DropdownButton";
import { toast } from "sonner";

interface EditProfileButtonProps {
  userName: string;
  profileImage: string;
  onUpdateProfile: (updated: {
    nickName: string;
    profileImageUrl: string;
  }) => void;
}

export default function EditProfileButton({
  userName,
  profileImage,
  onUpdateProfile,
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

  const { data: session } = useSession();
  const userPublicId = session?.user.publicId;

  const form = useForm<{
    nickName: string;
    profileImage: FileList | undefined;
  }>({
    defaultValues: {
      nickName: `${userName}`,
      profileImage: undefined,
    },
  });
  const currentNickName = form.watch("nickName");
  const fileList = form.watch("profileImage");
  const selectedFile = fileList?.[0];
  const isChanged = currentNickName !== userName || selectedFile !== undefined;

  const onSubmit = async () => {
    const fileList = form.getValues("profileImage");
    const file = fileList?.[0];

    const formData = new FormData();
    formData.append("userPublicId", String(userPublicId));
    formData.append("nickName", form.getValues("nickName"));
    formData.append("currentImageUrl", profileImage);
    if (file) {
      formData.append("newImageFile", file);
    }

    const res = await fetch("/api/users/update", {
      method: "POST",
      body: formData,
    });

    const { result, success, message } = await res.json();

    if (success) {
      setIsDialogOpen(false);
      onUpdateProfile({
        nickName: result.nickname,
        profileImageUrl: result.profileUrl,
      });

      toast.success(message);
      form.reset({
        nickName: form.getValues("nickName"),
        profileImage: undefined,
      });
    } else {
      toast.error(message);
    }
  };

  return (
    <>
      <DropdownButton options={options} type="icon" align="bottom" />
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
              <Button
                variant="joinFullBtn"
                size="full"
                type="submit"
                disabled={!isChanged}
              >
                프로필 수정하기
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
