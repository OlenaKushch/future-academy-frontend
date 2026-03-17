import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  courseId: number | null;
  courseUuid: string | null;
  courseTitle: string;
  openModal: (id: number, title: string, uuid: string) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  courseId: null,
  courseUuid: null,
  courseTitle: "",

  openModal: (id, title, uuid) => set({
    isOpen: true,
    courseId: id,
    courseUuid: uuid,
    courseTitle: title,
  }),

  closeModal: () => set({
    isOpen: false,
    courseId: null,
    courseUuid: null,
    courseTitle: "",
  }),
}));