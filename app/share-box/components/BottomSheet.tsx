"use client";

import * as React from "react";
import Carousel from "./ShareBoxCarousel";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
} from "@/components/ui/drawer";
import Content from "@/components/common/shares/Content";
import KakaoMapDetail from "@/components/details/KakaoMapDetail";
import { useRouter } from "next/navigation";

interface BottomSheetProps {
  open: boolean;
  action: (open: boolean) => void;
  title: string;
  imageUrls: string[];
  description: string;
  remainingHours: string;
  shareItem?: string;
  lat?: number;
  lng?: number;
  location?: string;
  id: number;
}

export default function BottomSheet({
  open,
  action,
  title,
  imageUrls,
  description,
  remainingHours,
  shareItem,
  lat,
  lng,
  location,
  id,
}: BottomSheetProps) {
  const router = useRouter();

  const goDetailPage = (shareId: number) => {
    router.push(`/share/${shareId}`);
  };

  return (
    <Drawer open={open} onOpenChange={action}>
      <DrawerContent>
        <div className="w-full px-4 overflow-y-auto scrollbar-hide pb-6">
          <DrawerTitle className="title-md mt-2 mb-4">{title}</DrawerTitle>
          <Carousel
            images={
              imageUrls.length > 0
                ? imageUrls
                : ["/assets/images/example/default-profile.png"]
            }
          />
          <Content
            shareItem={shareItem || ""}
            remainingHours={remainingHours || ""}
            description={description}
          />
          {lat && lng && location && (
            <KakaoMapDetail
              height="136px"
              lat={lat}
              lng={lng}
              location={location}
            />
          )}
        </div>
        <DrawerFooter className="border-t">
          <Button
            variant="joinFullBtn"
            size="lg"
            onClick={() => goDetailPage(id)}
          >
            자세히 보기
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
