'use client';

import { Breed, Country, Species } from '@prisma/client';
import ClientOnly from '../components/ClientOnly';
import Container from '../components/Container';
import EmptyState from '../components/EmptyState';
import PetCard from '../components/pets/PetCard';
import { SafePet, SafeUser } from '../types';

interface ExploreClientProps {
	currentUser?: SafeUser | null;
	pets: (SafePet & {
		lister: SafeUser;
		origin: Country;
		species: Species;
		breed: Breed;
	})[];
}

const ExploreClient: React.FC<ExploreClientProps> = ({ currentUser, pets }) => {
	if (pets.length === 0) {
		return (
			<ClientOnly>
				<EmptyState showReset />
			</ClientOnly>
		);
	}

	return (
		<Container>
			<div
				className="
						pt-12
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
				{pets.map((pet) => {
					return <PetCard currentUser={currentUser} key={pet.id} data={pet} />;
				})}
			</div>
		</Container>
	);
};

export default ExploreClient;
