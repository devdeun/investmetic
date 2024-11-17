import { create } from 'zustand'

import { RoleSelectType } from '@/shared/types/user'

interface StateModel {
  userType: RoleSelectType | null
}

interface ActionModel {
  setUserType: (userType: RoleSelectType) => void
}

interface ActionsModel {
  actions: ActionModel
}

const initialState = {
  userType: null,
} as const

const useSignupStore = create<StateModel & ActionsModel>((set) => ({
  ...initialState,
  actions: {
    setUserType: (userType) => set((state) => ({ ...state, userType })),
  },
}))

export default useSignupStore
