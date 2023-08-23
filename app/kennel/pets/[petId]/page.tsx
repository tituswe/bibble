import getCurrentUser from '@/app/actions/getCurrentUser';
import getPetById from '@/app/actions/getPetById';
import EmptyState from '@/app/components/EmptyState';
import PetClient from './PetClient';
import getVaccines from '@/app/actions/getVaccines';

interface IParams {
	petId?: string;
}

const PetPage = async ({ params }: { params: IParams }) => {
	const pet = await getPetById(params);
	const currentUser = await getCurrentUser();
	const vaccines = await getVaccines();

	if (!pet) {
		return <EmptyState />;
	}

	return <PetClient pet={pet} currentUser={currentUser} vaccines={vaccines}/>;
};

export default PetPage;
