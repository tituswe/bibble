'use client';

import Container from '@/app/components/Container';
import EmptyState from '../../components/EmptyState';
import PetCard from '../../components/pets/PetCard';
import { SafePet, SafeUser } from '../../types';

interface ExploreClientProps {
	currentUser?: SafeUser | null;
	pets: Array<SafePet>;
}

const ExploreClient: React.FC<ExploreClientProps> = ({ currentUser, pets }) => {
	if (pets.length === 0) {
		return <EmptyState showReset />;
	}

	return (
		<Container>
			<div
				className="
						grid
						grid-cols-1
						sm:grid-cols-2
						md:grid-cols-3
						lg:grid-cols-4
						xl:grid-cols-5
						2xl:grid-cols-6
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
