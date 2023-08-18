import FilterModal from '../components/modals/FilterModal';
import LoginModal from '../components/modals/LoginModal';
import RegisterModal from '../components/modals/RegisterModal';

const ModalProvider = async () => {
	return (
		<>
			<FilterModal />
			<LoginModal />
			<RegisterModal />
		</>
	);
};

export default ModalProvider;
