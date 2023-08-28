import { create } from 'zustand';

interface ViewMoreModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	contentHeader: string;
	contentBody: string;
}

const useViewMoreModal = create<ViewMoreModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
	contentHeader: 'INSERT HEADER',
	contentBody: 'INSERT BODY',
}));

export default useViewMoreModal;
