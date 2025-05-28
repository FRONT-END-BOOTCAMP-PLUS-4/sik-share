import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

interface DeleteDialogProps {
  isDialogOpen: boolean;
  onClose: () => void;
}

export default function DeleteDialog({
  isDialogOpen,
  onClose,
}: DeleteDialogProps) {
  const handleDelete = () => {
    onClose();
    console.log("네 제발료");
  };
  return (
    <AlertDialog open={isDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>나눔 글을 정말 삭제하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            삭제된 글은 다시 살릴 수 없어요😢
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            아니오
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
          >
            네, 삭제 할게요
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
