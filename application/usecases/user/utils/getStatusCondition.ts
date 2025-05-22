// application/usecase/user/utils/getStatusCondition.ts

import type { Prisma } from "@/prisma/generated";

type StatusType = "active" | "completed" | "expired";
type Mode = "share" | "groupBuy";

export function getStatusCondition(
  type: StatusType,
  mode: Mode,
): Prisma.ShareWhereInput {
  const now = new Date();
  const deadline = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 24시간 전

  switch (mode) {
    // biome-ignore lint/suspicious/noFallthroughSwitchClause: <explanation>
    case "share":
      switch (type) {
        case "active":
          return { status: 0, createdAt: { gt: deadline } };
        case "expired":
          return { status: 0, createdAt: { lt: deadline } };
        case "completed":
          return { status: 1 };
      }

    case "groupBuy":
      switch (type) {
        case "active":
          return { status: 0, meetingDate: { gt: now } };
        case "expired":
          return { status: 0, meetingDate: { lt: now } };
        case "completed":
          return { status: 1 };
      }
  }

}
