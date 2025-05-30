"use client";

import * as React from "react";
import Carousel from "@/components/common/shares/Carousel";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
} from "@/components/ui/drawer";
import Content from "@/components/common/shares/Content";
import KakaoMapDetail from "@/components/details/KakaoMapDetail";

interface BottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  image: string;
  description: string;
  timeLeft?: string;
  shareItem?: string;
  lat?: number;
  lng?: number;
  location?: string;
}

export default function BottomSheet({
  open,
  onOpenChange,
  title,
  image,
  description,
  timeLeft,
  shareItem,
  lat,
  lng,
  location,
}: BottomSheetProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm overflow-y-auto">
          <DrawerTitle className="title-md mt-9 mb-4">{title}</DrawerTitle>
          <Carousel
            images={
              image ? [image] : ["/assets/images/example/default-profile.png"]
            }
          />
          <Content
            shareItem={shareItem || ""}
            timeLeft={timeLeft || ""}
            description={description}
          />
          {lat && lng && location && (
            <KakaoMapDetail lat={lat} lng={lng} location={location} />
          )}
        </div>
        <DrawerFooter className="border-t">
          <Button variant="joinFullBtn" size="lg">
            나눔 신청하기
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
