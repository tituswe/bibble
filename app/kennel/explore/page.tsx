import getCurrentUser from '@/app/actions/getCurrentUser';
import getPets, { IPetsParams } from '@/app/actions/getPets';
import EmptyState from '@/app/components/EmptyState';
import KennelPage from '@/app/components/KennelPage';
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
		<KennelPage>
			<ExploreClient currentUser={currentUser} pets={pets} />
		</KennelPage>
	);
};

export default ExplorePage;
