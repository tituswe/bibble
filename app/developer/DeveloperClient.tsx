'use client';

import { Breed, Country, Species, Vaccine } from '@prisma/client';
import Container from '../components/Container';
import AvsLicensesButton from '../components/developer/AvsLicensesButton';
import BreedsButton from '../components/developer/BreedsButton';
import CountriesButton from '../components/developer/CountriesButton';
import PetsButton from '../components/developer/PetsButton';
import SpeciesButton from '../components/developer/SpeciesButton';
import VaccinesButton from '../components/developer/VaccinesButton';

interface DeveloperClientProps {
	users: Array<any>;
	species: Species[];
	breeds: Breed[];
	countries: Country[];
	vaccines: Vaccine[];
}

const DeveloperClient: React.FC<DeveloperClientProps> = ({
	users,
	species,
	breeds,
	countries,
	vaccines,
}) => {
	return (
		<Container>
			<div
				className="
						pt-24
						grid
						grid-cols-1
						sm:grid-cols-2
						md:grid-cols-2
						lg:grid-cols-3
						xl:grid-cols-4
						2xl:grid-cols-5
						gap-8
					"
			>
				<SpeciesButton />
				<BreedsButton />
				<CountriesButton />
				<VaccinesButton />
				<PetsButton
					users={users}
					species={species}
					breeds={breeds}
					countries={countries}
					vaccines={vaccines}
				/>
				<AvsLicensesButton />
			</div>
		</Container>
	);
};

export default DeveloperClient;
