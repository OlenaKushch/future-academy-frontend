import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  courseId: number | null;  
  courseTitle: string;
  openModal: (id: number, title: string) => void; 
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  courseId: null,
  courseTitle: "",
  
  
  openModal: (id, title) => set({ 
    isOpen: true, 
    courseId: id, 
    courseTitle: title 
  }),
  
  closeModal: () => set({ 
    isOpen: false, 
    courseId: null, 
    courseTitle: "" 
  }),
}));