import { create } from 'zustand'

interface ModalStoreModel {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export const useModalStore = create<ModalStoreModel>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}))
