import { create } from 'zustand'

import { UserType } from '@/shared/types/user'

interface StateModel {
  userType: UserType | null
  nickname: string | null
  isAgreedTerm: boolean
}

interface ActionModel {
  setUserType: (userType: UserType) => void
  setIsAgreedTerm: (isAgreedTerm: boolean) => void
}

interface ActionsModel {
  actions: ActionModel
}

const initialState = {
  userType: null,
  nickname: null,
  isAgreedTerm: false,
} as const

const useSignupStore = create<StateModel & ActionsModel>((set) => ({
  ...initialState,
  actions: {
    setUserType: (userType) => set((state) => ({ ...state, userType })),
    setIsAgreedTerm: (isAgreedTerm) => set((state) => ({ ...state, isAgreedTerm })),
  },
}))

export default useSignupStore
