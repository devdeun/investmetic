import { create } from 'zustand'

import type { UserModel } from '../types/auth'

interface AuthStateModel {
  isAuthenticated: boolean
  user: UserModel | null
  isKeepLoggedIn: boolean
  isLoggedOut: boolean
}

interface AuthActionsModel {
  setKeepLoggedIn: (value: boolean) => void
  setAuthState: (state: Partial<AuthStateModel>) => void
}

type AuthStoreType = AuthStateModel & AuthActionsModel

const initialState: AuthStateModel = {
  isAuthenticated: false,
  user: null,
  isKeepLoggedIn: false,
  isLoggedOut: false,
}

export const useAuthStore = create<AuthStoreType>((set) => ({
  ...initialState,

  setKeepLoggedIn: (value) =>
    set((state) => ({
      ...state,
      isKeepLoggedIn: value,
    })),

  setAuthState: (newState) =>
    set((state) => ({
      ...state,
      ...newState,
    })),
}))
