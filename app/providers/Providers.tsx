import getBreeds from '../actions/getBreeds';
import getCountries from '../actions/getCountries';
import getPets from '../actions/getPets';
import getSpecies from '../actions/getSpecies';
import getVaccines from '../actions/getVaccines';
import { FilterContextProvider } from './FilterContextProvider';
import ModalProvider from './ModalProvider';
import ToasterProvider from './ToasterProvider';

interface ProvidersProps {
	children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = async ({ children }) => {
	const allPets = await getPets({});
	const allSpecies = await getSpecies();
	const allBreeds = await getBreeds();
	const allOrigins = await getCountries();
	const allVaccines = await getVaccines();

	return (
		<FilterContextProvider
			allPets={allPets}
			allSpecies={allSpecies}
			allBreeds={allBreeds}
			allOrigins={allOrigins}
			allVaccines={allVaccines}
		>
			<ToasterProvider />
			{children}
			<ModalProvider />
		</FilterContextProvider>
	);
};

export default Providers;
