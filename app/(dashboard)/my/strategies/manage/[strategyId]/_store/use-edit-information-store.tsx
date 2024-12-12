import { create } from 'zustand'

interface InformationModel {
  strategyName: string | null
  description: string | null
}

interface StateModel {
  information: InformationModel
}

interface ActionModel {
  actions: {
    setStrategyName: (name: string) => void
    setDescription: (description: string) => void
  }
}

const useEditInformationStore = create<StateModel & ActionModel>((set) => ({
  information: {
    strategyName: null,
    description: null,
  },

  actions: {
    setStrategyName: (name) =>
      set((state) => ({
        information: { ...state.information, strategyName: name },
      })),
    setDescription: (description) =>
      set((state) => ({
        information: { ...state.information, description },
      })),
  },
}))

export default useEditInformationStore
