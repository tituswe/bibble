'use client';

import FilterModal from '../components/modals/FilterModal';
import LoginModal from '../components/modals/LoginModal';
import PostModal from '../components/modals/PostModal';
import RegisterModal from '../components/modals/RegisterModal';

const ModalProvider = () => {
	return (
		<>
			<FilterModal />
			<PostModal />
			<LoginModal />
			<RegisterModal />
		</>
	);
};

export default ModalProvider;
