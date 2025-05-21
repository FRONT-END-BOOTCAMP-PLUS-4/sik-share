import { create } from "zustand";

interface MapFilterState {
  filterType: string;
  setFilterType: (value: string) => void;
}

export const useMapFilterStore = create<MapFilterState>((set) => ({
  filterType: "all",
  setFilterType: (value) => set({ filterType: value }),
}));
