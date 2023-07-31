import getCurrentUser from '@/app/actions/getCurrentUser';
import getPetById from '@/app/actions/getPetById';
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import PetClient from './PetClient';

interface IParams {
	petId?: string;
}

const PetPage = async ({ params }: { params: IParams }) => {
	const pet = await getPetById(params);
	const currentUser = await getCurrentUser();

	if (!pet) {
		return (
			<ClientOnly>
				<EmptyState />
			</ClientOnly>
		);
	}

	return (
		<ClientOnly>
			<PetClient pet={pet} currentUser={currentUser} />
		</ClientOnly>
	);
};

export default PetPage;
