import getBreeds from '../actions/getBreeds';
import getCountries from '../actions/getCountries';
import getPets from '../actions/getPets';
import getSpecies from '../actions/getSpecies';
import getVaccines from '../actions/getVaccines';
import FilterModal from '../components/modals/FilterModal';
import LoginModal from '../components/modals/LoginModal';
import PostModal from '../components/modals/PostModal';
import RegisterModal from '../components/modals/RegisterModal';

const ModalProvider = async () => {
	const allPets = await getPets({});
	const allSpecies = await getSpecies();
	const allBreeds = await getBreeds();
	const allOrigins = await getCountries();
	const allVaccines = await getVaccines();

	return (
		<>
			<FilterModal
				data={{ allPets, allSpecies, allBreeds, allOrigins, allVaccines }}
			/>
			<PostModal />
			<LoginModal />
			<RegisterModal />
		</>
	);
};

export default ModalProvider;
