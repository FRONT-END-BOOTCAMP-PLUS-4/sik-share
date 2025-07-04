export type GroupStatus =
  | "CLOSING"
  | "EXPIRED"
  | "DONE"
  | "ONGOING"
  | "RESERVED"
  | "SHARE_DONE"
  | "DDAY"
  | "FULL"
  | "UNKNOWN";

export interface GroupStatusParams {
  type: string;
  isDday?: number;
  status: number;
  remainingHours?: number;
  meetingDate?: string;
  memberCount?: number;
  maxMember?: number;
}

export function getGroupStatus({
  type,
  isDday,
  status,
  remainingHours,
  meetingDate,
  memberCount,
  maxMember,
}: GroupStatusParams): GroupStatus {
  const today = new Date().toLocaleDateString();
  const meeting = meetingDate ? new Date(meetingDate).toLocaleDateString() : undefined;

  if (typeof memberCount === "number" && typeof maxMember === "number" && memberCount >= maxMember) {
    return "FULL";
  }

  if (type === "groupbuy") {
    if (status === 1) return "DONE";
    if (meeting && today > meeting) return "EXPIRED";
    if (
      isDday !== undefined &&
      isDday <= 1 &&
      status === 0 &&
      meeting !== undefined &&
      today <= meeting
    )
      return "CLOSING";
  }

  if (type === "share") {
    if (status === 2) return "SHARE_DONE";
    if (status === 1) return "RESERVED";
    if (status === 0 && remainingHours === 0) return "EXPIRED";
    if (status === 0 && remainingHours !== 0) return "ONGOING";
  }

  return "UNKNOWN";
}
