import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';

import getCurrentUser from '../actions/getCurrentUser';
import getFavoritePets from '../actions/getFavoritePets';
import FavoritesClient from './FavoritesClient';

const FavoritePage = async () => {
	const pets = await getFavoritePets();
	const currentUser = await getCurrentUser();

	if (pets.length === 0) {
		return (
			<ClientOnly>
				<EmptyState
					title="No favorites found"
					subtitle="Looks like you have no favorite pets."
				/>
			</ClientOnly>
		);
	}

	return (
		<ClientOnly>
			<FavoritesClient pets={pets} currentUser={currentUser} />
		</ClientOnly>
	);
};

export default FavoritePage;
