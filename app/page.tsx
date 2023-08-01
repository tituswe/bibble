import getCurrentUser from './actions/getCurrentUser';
import getPets, { IPetsParams } from './actions/getPets';
import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import EmptyState from './components/EmptyState';
import PetCard from './components/pets/PetCard';

interface HomeProps {
	searchParams: IPetsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
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
			<Container>
				<div
					className="
						pt-24
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
						return (
							<PetCard currentUser={currentUser} key={pet.id} data={pet} />
						);
					})}
				</div>
			</Container>
		</ClientOnly>
	);
};

export default Home;
