"use client";

import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

interface profileProps {
  isMyAccount: boolean;
  memberTitle: string;
}

export default function Profile({ isMyAccount, memberTitle }: profileProps) {
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
          <div className="text-2xl/normal pt-1.5">싱그러운 새싹</div>
        </div>
        {isMyAccount && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="editProfile" size="xs">
                프로필 수정
              </Button>
            </DialogTrigger>
            <DialogContent>
              <VisuallyHidden>
                <DialogHeader>
                  <DialogTitle>프로필 수정 팝업</DialogTitle>
                </DialogHeader>
              </VisuallyHidden>
              <Label htmlFor="nickName">닉네임</Label>
              <Input id="nickName" placeholder="싱그러운 새싹" />
              <Button variant="joinFullBtn">프로필 수정하기</Button>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
