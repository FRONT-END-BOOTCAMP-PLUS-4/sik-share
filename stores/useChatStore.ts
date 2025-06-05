import { create } from "zustand"

type ChatState = {
  selectedRoomId: string | null
  setSelectedRoomId: (id: string) => void
}

export const useChatStore = create<ChatState>((set) => ({
  selectedRoomId: null,
  setSelectedRoomId: (id) => set({ selectedRoomId: id }),
}))