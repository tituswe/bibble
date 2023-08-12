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
	const pets = await getPets({});
	const species = await getSpecies();
	const breeds = await getBreeds();
	const origins = await getCountries();
	const vaccines = await getVaccines();

	return (
		<>
			<FilterModal data={{ pets, species, breeds, origins, vaccines }} />
			<PostModal />
			<LoginModal />
			<RegisterModal />
		</>
	);
};

export default ModalProvider;
