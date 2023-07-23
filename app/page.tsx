import getCurrentUser from './actions/getCurrentUser';
import getPets from './actions/getPets';
import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import EmptyState from './components/EmptyState';
import PetCard from './components/pets/PetCard';

export default async function Home() {
	const pets = await getPets();
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
			<Container>
				<div
					className="
						pt-24
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
					{pets.map((pet: any) => {
						return (
							<PetCard currentUser={currentUser} key={pet.id} data={pet} />
						);
					})}
				</div>
			</Container>
		</ClientOnly>
	);
}
