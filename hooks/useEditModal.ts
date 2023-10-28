import { IHooksModalProps } from "@/utils/types";
import { create } from "zustand";

const useEditModal = create<IHooksModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditModal;
