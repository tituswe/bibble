import getCurrentUser from '@/app/actions/getCurrentUser';
import getPets from '@/app/actions/getPets';
import { BiFilter } from 'react-icons/bi';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Table from './components/Table';

interface Query {
	query?: string;
}

interface ListingsProps {
	searchParams: Query;
}

const Listings = async ({ searchParams }: ListingsProps) => {
	const currentUser = await getCurrentUser();
	const listings = getPets({ listerId: currentUser?.id });
	const filters = ['Sale type', 'Species', 'Breed', 'More filters'];

	return (
		<main className="flex flex-col gap-4">
			<h1 className="text-xl font-semibold">7 listings</h1>
			<section className="flex flex-row gap-4">
				<Search />
				{filters.map((item, i) => (
					<Dropdown key={i} label={item} />
				))}
				<div
					className="
						flex
						lg:hidden
						flex-row
						items-center
						justify-center
						border
						w-[30px]
						rounded-full
					"
				>
					<BiFilter />
				</div>
			</section>
			<Table />
		</main>
	);
};

export default Listings;
