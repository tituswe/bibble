'use client';

import Container from '../components/Container';
import Heading from '../components/Heading';
import PetCard from '../components/pets/PetCard';
import { SafePet, SafeUser } from '../types';

interface FavoritesClientProps {
	pets: (SafePet & { user: SafeUser })[];
	currentUser: SafeUser | null;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
	pets,
	currentUser,
}) => {
	return (
		<Container>
			<Heading title="Favorites" subtitle="List of pets you have favorited!" />
			<div
				className="
         mt-10
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
				{pets.map((pet) => (
					<PetCard currentUser={currentUser} key={pet.id} data={pet} />
				))}
			</div>
		</Container>
	);
};

export default FavoritesClient;
