import KennelClient from '@/app/KennelClient';
import getCurrentUser from '@/app/actions/getCurrentUser';
import getPets, { IPetsParams } from '@/app/actions/getPets';
import EmptyState from '@/app/components/EmptyState';
import ExploreClient from './ExploreClient';

interface ExplorePageProps {
	searchParams: IPetsParams;
}

const ExplorePage = async ({ searchParams }: ExplorePageProps) => {
	const pets = await getPets(searchParams);
	const currentUser = await getCurrentUser();

	if (pets.length === 0) {
		return <EmptyState showReset />;
	}

	return (
		<KennelClient>
			<ExploreClient currentUser={currentUser} pets={pets} />
		</KennelClient>
	);
};

export default ExplorePage;
