import type { Prisma } from "@/prisma/generated";
import type { StatusType } from "@/types/types";

export function getShareStatusCondition(
  type: StatusType,
): Prisma.ShareWhereInput {
  const now = new Date();
  const deadline = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  switch (type) {
    case "active":
      return { OR: [{ status: 0 , createdAt: { gt: deadline } }, { status: 1 }] };
    case "expired":
      return { status: 0, createdAt: { lt: deadline }, meetingDate: null };
    case "completed":
      return { status: 2 };
  }
}