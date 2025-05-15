import { create } from 'zustand';
import { persist } from 'zustand/middleware'

interface AuthStore {
  publicId: string | null;
  accessToken: string | null;
  setPublicId: (id: string) => void;
  setAccessToken: (token: string) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      publicId: null,
      accessToken: null,
      setPublicId: (id: string) => set({publicId: id}),
      setAccessToken: (token:string) => set({accessToken: token}),
      clearUser: () => set({publicId: null, accessToken: null})
    }),
    {
      name: "auth-store",
      partialize: (state) => ({
        publicId: state.publicId
      }),
    }
  )
);