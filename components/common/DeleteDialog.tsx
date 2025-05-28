import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

interface DeleteDialogProps {
  id: number;
  type: "share" | "group-buy";
  isDialogOpen: boolean;
  onClose: () => void;
  onDelete?: (id: number) => void;
}

export default function DeleteDialog({
  id,
  isDialogOpen,
  onClose,
  type,
  onDelete,
}: DeleteDialogProps) {
  const handleDelete = async () => {
    onClose();
    const res = await fetch(`/api/${type}s/${id}`, {
      method: "DELETE",
    });

    const { success, message } = await res.json();

    if (success) {
      toast.success(message);
      onDelete?.(id);
    } else {
      toast.error(message);
    }
  };
  return (
    <AlertDialog open={isDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {type === "share" ? "나눔" : "같이 장보기"} 글을 정말
            삭제하시겠습니까?
          </AlertDialogTitle>
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
