import getBreeds from '../actions/getBreeds';
import getCountries from '../actions/getCountries';
import { IPetsParams } from '../actions/getPets';
import getSpecies from '../actions/getSpecies';
import getUsers from '../actions/getUsers';
import DeveloperClient from './DeveloperClient';

interface DeveloperPageProps {
	searchParams: IPetsParams;
}

const DeveloperPage = async ({ searchParams }: DeveloperPageProps) => {
	const users = await getUsers();
	const species = await getSpecies();
	const breeds = await getBreeds();
	const countries = await getCountries();
	return (
		<DeveloperClient
			users={users}
			species={species}
			breeds={breeds}
			countries={countries}
		/>
	);
};

export default DeveloperPage;
