import { BiChevronDown, BiSearch } from 'react-icons/bi';

const Listings = () => {
	return (
		<main className="flex flex-col gap-4">
			<h1 className="text-xl font-semibold">_ listing</h1>
			<section className="flex flex-row gap-4">
				<div
					className="
						flex
						flex-row
						items-center
						gap-2
						px-3
						py-1
						border 
						border-neutral-400
						rounded-full 
						bg-neutral-100
						bg-opacity-75
						w-full
						md:w-96
					"
				>
					<BiSearch />
					<p className="font-light text-neutral-500 text-sm">Search Listings</p>
				</div>
				<div
					className="
						flex
						flex-row
						items-center
						gap-2
						border-[1px]
						rounded-full
						pl-4
						pr-3
						py-1
					"
				>
					<p className="font-light text-sm">Sale Type</p>
					<BiChevronDown size={20} />
				</div>
				<div
					className="
						flex
						flex-row
						items-center
						gap-2
						border-[1px]
						rounded-full
						pl-4
						pr-3
						py-1
					"
				>
					<p className="font-light text-sm">Species</p>
					<BiChevronDown size={20} />
				</div>
				<div
					className="
						flex
						flex-row
						items-center
						gap-2
						border-[1px]
						rounded-full
						pl-4
						pr-3
						py-1
					"
				>
					<p className="font-light text-sm">Breeds</p>
					<BiChevronDown size={20} />
				</div>
				<div
					className="
						flex
						flex-row
						items-center
						gap-2
						border-[1px]
						rounded-full
						pl-4
						pr-3
						py-1
					"
				>
					<p className="font-light text-sm">More filters</p>
					<BiChevronDown size={20} />
				</div>
			</section>
			<section>Listing Table</section>
		</main>
	);
};

export default Listings;
