import { create } from 'zustand'

import { UserType } from '@/shared/types/user'

interface StateModel {
  userType: UserType | null
  nickname: string | null
}

interface ActionModel {
  setUserType: (userType: UserType) => void
}

interface ActionsModel {
  actions: ActionModel
}

const initialState = {
  userType: null,
  nickname: null,
} as const

const useSignupStore = create<StateModel & ActionsModel>((set) => ({
  ...initialState,
  actions: {
    setUserType: (userType) => set((state) => ({ ...state, userType })),
  },
}))

export default useSignupStore
