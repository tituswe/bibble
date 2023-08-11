'use client';

import { create } from 'zustand';

interface ReserveVisitationModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useReserveVisitationModal = create<ReserveVisitationModalStore>((set) => ({
	isOpen: true,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useReserveVisitationModal;