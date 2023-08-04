import ClientOnly from '../components/ClientOnly';

import getCurrentUser from '../actions/getCurrentUser';
import getPets, { IPetsParams } from '../actions/getPets';
import EmptyState from '../components/EmptyState';
import ExploreClient from './ExploreClient';

interface ExplorePageProps {
	searchParams: IPetsParams;
}

const ExplorePage = async ({ searchParams }: ExplorePageProps) => {
	const pets = await getPets(searchParams);
	const currentUser = await getCurrentUser();

	if (pets.length === 0) {
		return (
			<ClientOnly>
				<EmptyState showReset />
			</ClientOnly>
		);
	}

	return (
		<ClientOnly>
			<ExploreClient currentUser={currentUser} pets={pets} />
		</ClientOnly>
	);
};

export default ExplorePage;
