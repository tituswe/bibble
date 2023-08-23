import FilterModal from '../components/modals/FilterModal';
import LoginModal from '../components/modals/LoginModal';
import RegisterModal from '../components/modals/RegisterModal';
import ReserveVisitationModal from '../components/modals/ReserveVisitationModal';

const ModalProvider = async () => {
	return (
		<>
			<FilterModal />
			<LoginModal />
			<RegisterModal />
			<ReserveVisitationModal />
		</>
	);
};

export default ModalProvider;
