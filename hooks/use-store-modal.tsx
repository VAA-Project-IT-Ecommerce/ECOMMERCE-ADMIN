import { create } from "zustand";

interface useStoreModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export const useStoreModal = create<useStoreModalStore>((set) => ({
  isOpen: false, // Giá trị ban đầu của modal là đóng
  onOpen: () => set({ isOpen: true }), // Hàm mở modal
  onClose: () => set({ isOpen: false }), // Hàm đóng modal
}));
