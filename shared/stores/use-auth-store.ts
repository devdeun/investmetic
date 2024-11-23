import { create } from 'zustand'

import type { UserModel } from '../types/auth'

interface AuthStateModel {
  isAuthenticated: boolean
  user: UserModel | null
  isKeepLoggedIn: boolean
  isLoggedOut: boolean
  setKeepLoggedIn: (value: boolean) => void
  setAuthState: (state: Partial<AuthStateModel>) => void
}

export const useAuthStore = create<AuthStateModel>((set) => ({
  isAuthenticated: false,
  user: null,
  isKeepLoggedIn: false,
  isLoggedOut: false,

  setKeepLoggedIn: (value) => set({ isKeepLoggedIn: value }),
  setAuthState: (state) => set(state),
}))
