"use client";

import { SessionProvider as OriginalSessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

export function SessionProvider({ children }: { children: ReactNode }) {
  return <OriginalSessionProvider>{children}</OriginalSessionProvider>;
}
