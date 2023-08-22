'use client';

import { create } from 'zustand';

interface ReserveVisitationModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	date: Date;
	time: Date | null;
	numberOfVisitors: number | null;
}

const useReserveVisitationModal = create<ReserveVisitationModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
	date: new Date(Date.now()),
	time: null,
	numberOfVisitors: null,
}));

export default useReserveVisitationModal;