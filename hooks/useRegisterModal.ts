import { ILoginModalStore } from "@/utils/types";
import { create } from "zustand";

const useRegisterModal = create<ILoginModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;
