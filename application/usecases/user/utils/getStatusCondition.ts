import type { Prisma } from "@/prisma/generated";
import type { StatusType } from "@/types/types";

export function getShareStatusCondition(
  type: StatusType,
): Prisma.ShareWhereInput {
  const now = new Date();
  const deadline = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  switch (type) {
    case "active":
      return { status: 0, createdAt: { gt: deadline } };
    case "expired":
      return { status: 0, createdAt: { lt: deadline } };
    case "completed":
      return { status: 1 };
  }
}

export function getGroupBuyStatusCondition(
  type: StatusType,
): Prisma.GroupBuyWhereInput {
  const now = new Date();

  switch (type) {
    case "active":
      return { status: 0, meetingDate: { gt: now } };
    case "expired":
      return { status: 0, meetingDate: { lt: now } };
    case "completed":
      return { status: 1 };
  }
}
