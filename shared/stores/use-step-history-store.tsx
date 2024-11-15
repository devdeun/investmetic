import { create } from 'zustand'

interface StateModel {
  stepHistory: string[]
}

interface ActionModel {
  addStep: (step: string) => void
  removeStep: () => void
}

const useStepHistoryStore = create<StateModel & ActionModel>((set) => ({
  stepHistory: [],
  addStep: (step) => set((state) => ({ ...state, stepHistory: [...state.stepHistory, step] })),
  removeStep: () => set((state) => ({ ...state, stepHistory: state.stepHistory.slice(1) })),
}))

export default useStepHistoryStore
