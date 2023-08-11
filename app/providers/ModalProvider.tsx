import getBreeds from '../actions/getBreeds';
import getCountries from '../actions/getCountries';
import getPets from '../actions/getPets';
import getSpecies from '../actions/getSpecies';
import FilterModal from '../components/modals/FilterModal';
import LoginModal from '../components/modals/LoginModal';
import PostModal from '../components/modals/PostModal';
import RegisterModal from '../components/modals/RegisterModal';
import ReserveVisitationModal from '../components/modals/ReserveVisitationModal';

const ModalProvider = async () => {
	const pets = await getPets({});
	const species = await getSpecies();
	const breeds = await getBreeds();
	const origins = await getCountries();

	return (
		<>
			<FilterModal data={{ pets, species, breeds, origins }} />
			<PostModal />
			<LoginModal />
			<RegisterModal />
			<ReserveVisitationModal />
		</>
	);
};

export default ModalProvider;
