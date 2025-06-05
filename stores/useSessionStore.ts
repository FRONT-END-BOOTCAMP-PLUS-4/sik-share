import { create } from "zustand";

interface SessionState {
  isOwner: boolean;
  setIsOwner: (value: boolean) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  isOwner: false,
  setIsOwner: (value) => set({ isOwner: value }),
}));
