import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CircleUserRound, Clock, MapPin } from "lucide-react";
import {
  Badge,
  type VariantProps as BadgeVariantProps,
} from "@/components/ui/badge";
import DropdownButton, {
  type DropdownOption,
} from "@/components/common/DropdownButton";
import DeleteDialog from "@/components/common/DeleteDialog";

export interface GroupBuyListCardProps {
  id: number;
  thumbnailSrc: string;
  title: string;
  location: string;
  badgeLabel?: string;
  meetingDate?: string;
  currentUsers?: number;
  maxUsers?: number;
  isEdit?: boolean;
  onDelete?: (id: number) => void;
}

export function GroupBuyListCard({
  id,
  thumbnailSrc,
  title,
  meetingDate,
  location,
  currentUsers,
  maxUsers,
  badgeLabel,
  isEdit,
  onDelete,
}: GroupBuyListCardProps) {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const options: DropdownOption[] = [
    {
      id: "edit",
      label: "수정하기",
      onClick: () => {
        router.push(`/group-buy/${id}/edit`);
      },
    },
    {
      id: "delete",
      label: "삭제하기",
      onClick: () => {
        setIsDialogOpen(true);
      },
    },
  ];

  return (
    <>
      <div className="w-full flex gap-2 items-start px-4 py-3 cursor-pointer  border-b-1 border-b-zinc-200 hover:bg-zinc-100 hover:border-b-transparents">
        <div className="flex-shrink-0">
          <Image
            className="rounded-sm w-[78px] h-[78px] object-cover border border-zinc-200"
            src={thumbnailSrc}
            width={78}
            height={78}
            alt={`${title} 썸네일 이미지`}
          />
        </div>
        <div className="flex flex-col flex-1 gap-0.5">
          <div className="flex justify-between items-center">
            <div className="flex gap-1.5">
              {badgeLabel && <Badge variant="groupbuy">{badgeLabel}</Badge>}
              <p className="body-md truncate max-w-[230px]">{title}</p>
            </div>
            {isEdit && (
              <DropdownButton options={options} type="icon" iconType="more" />
            )}
          </div>
          <div className="flex flex-col gap-1 text-zinc-500">
            <div className="flex gap-[5px]">
              <div className="flex flex-1/2 items-center gap-1">
                <Clock size={16} strokeWidth={1} />
                <p className="caption">{meetingDate}</p>
              </div>
              <div className="flex flex-1/2 items-center gap-1">
                <CircleUserRound size={16} strokeWidth={1} />
                <p className="caption">
                  {currentUsers}/{maxUsers} 명
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} strokeWidth={1} />
              <p className="caption">{location}</p>
            </div>
          </div>
        </div>
      </div>
      <DeleteDialog
        id={id}
        type="group-buy"
        isDialogOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onDelete={onDelete}
      />
    </>
  );
}
