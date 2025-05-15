import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function AddFloatButton() {
  return (
    <div className="z-10 absolute bottom-4 right-4">
      <Link href="/">
        <Button variant="add">
          <div className="flex justify-center items-center gap-0.5">
            <Plus />
            <p>등록하기</p>
          </div>
        </Button>
      </Link>
    </div>
  );
}
