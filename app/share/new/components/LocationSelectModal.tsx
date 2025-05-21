import KakaoMap from "@/components/common/KakaoMap";
import SubHeader from "@/components/common/SubHeader";
import type { LocationData } from "@/types/types";
import { useEffect, useState, useCallback } from "react";
import ButtonSection from "./ButtonSection";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface LocationSelectModalProps {
  onClose: () => void;
  onConfirm: (locationData: LocationData) => void;
}

export default function LocationSelectModal({
  onClose,
  onConfirm,
}: LocationSelectModalProps) {
  const [mounted, setMounted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<LocationData>({
    locationNote: "",
    locationAddress: "",
    lat: undefined,
    lng: undefined,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLocationSelect = useCallback(
    (
      address: string,
      neighborhoodName: string,
      coordinates?: { lat: number; lng: number },
    ) => {
      if (!coordinates) return;

      setSelectedLocation({
        locationNote: "",
        locationAddress: neighborhoodName,
        lat: coordinates.lat,
        lng: coordinates.lng,
      });
    },
    [],
  );

  const handleButtonClick = () => {
    setShowDialog(true);
  };

  const handleDialogConfirm = () => {
    if (!selectedLocation.locationNote) return;

    onConfirm({
      ...selectedLocation,
    });
    setShowDialog(false);
  };

  if (!mounted) return null;

  return (
    <>
      <div className="absolute top-0 w-full h-full">
        <SubHeader
          iconType="close"
          DescTitleText={`만나고 싶은 장소를
          선택해주세요.`}
          DescSubText="모두가 찾을 수 있는 공공 장소가 좋아요!"
          onClick={onClose}
        />
        <section className=" flex flex-col h-[calc(100vh-170px)]">
          <KakaoMap onSelect={handleLocationSelect} />
          <ButtonSection onClick={handleButtonClick} />
        </section>
      </div>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex gap-1 items-center text-md">
              선택한 곳의 장소명을 입력해주세요{" "}
              <span className="caption text-zinc-400">(최대 25자)</span>
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleDialogConfirm}>
            <Input
              className="body-sm"
              placeholder="ex. 봉천역 2번 출구"
              value={selectedLocation.locationNote}
              onChange={(e) => {
                if (selectedLocation.locationNote.length >= 25) {
                  toast.error("25자 이내로 작성해주세요.");
                  return;
                }
                setSelectedLocation((prev) => ({
                  ...prev,
                  locationNote: e.target.value,
                }));
              }}
            />

            <Button
              className="w-full h-11 text-md text-zinc-50"
              disabled={!selectedLocation.locationNote}
            >
              장소 등록
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
