import Image from 'next/image';
import { BiChevronDown, BiFilter } from 'react-icons/bi';
import { FaHourglassHalf } from 'react-icons/fa';
import { PiCaretUpDownBold } from 'react-icons/pi';
import Search from './components/Search';

const Listings = () => {
	const filters = ['Sale type', 'Species', 'Breed', 'More filters'];

	return (
		<main className="flex flex-col gap-4">
			<h1 className="text-xl font-semibold">7 listings</h1>
			<section className="flex flex-row gap-4">
				<Search />
				{filters.map((item, i) => (
					<div
						key={i}
						className="
							hidden
							lg:flex
							flex-row
							items-center
							gap-2
							border-[1px]
							rounded-full
							pl-4
							pr-3
							py-1
							text-sm
						"
					>
						{item}
						<BiChevronDown size={20} />
					</div>
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
			<section
				className="
					flex
					flex-col
					w-full
					p-4
				"
			>
				<span
					className="
						flex 
						flex-row 
						gap-4 
						py-4
						text-xs
						text-neutral-500 
						font-bold
						items-center
					"
				>
					<input
						className="
							appearance-none 
							checked:bg-sky-500
							h-4 
							w-4
							border 
							border-neutral-400
							rounded-md
						"
						type="checkbox"
						id="listing"
						name="listing"
						value="listing"
					/>
					{/* LISTING */}
					<div className="flex flex-row gap-2 items-center w-96">
						<label>LISTING</label>
						<PiCaretUpDownBold />
					</div>
					{/* STATUS */}
					<div className="hidden lg:flex flex-row gap-2 items-center w-48">
						<label>STATUS</label>
						<PiCaretUpDownBold />
					</div>
					{/* TO DO */}
					<div className="hidden lg:flex flex-row gap-2 items-center w-48">
						<label>TO DO</label>
						<PiCaretUpDownBold />
					</div>
					{/* LISTED AT */}
					<div className="hidden lg:flex flex-row gap-2 items-center">
						<label className="whitespace-nowrap">LISTED AT</label>
						<PiCaretUpDownBold />
					</div>
				</span>
				<hr />
				{/* LISTING ROW */}
				<span
					className="
						flex 
						flex-row 
						gap-4 
						py-4
						items-center
					"
				>
					<input
						className="
							appearance-none 
							h-4 
							w-4
							border 
							border-neutral-400
							rounded-md
						"
						type="checkbox"
						id="listing"
						name="listing"
						value="listing"
					/>
					{/* LISTING */}
					<div className="flex flex-row items-center gap-4 w-96">
						<Image
							className="rounded-xl"
							src="https://res.cloudinary.com/dcbphkd0o/image/upload/v1691233383/juam8bpb5ezi7ealzhdy.png"
							width={60}
							height={60}
							alt="listing image"
						/>
						<p
							className="
							text-md
							text-neutral-800
							font-semibold
						"
						>
							Golden Retriever
						</p>
					</div>
					{/* STATUS */}
					<div className="hidden lg:flex flex-row gap-2 items-center w-48">
						<FaHourglassHalf size={14} />
						<p
							className="
								text-sm
								text-neutral-500
								font-light
							"
						>
							In Progress
						</p>
					</div>
					{/* TO DO */}
					<div className="pr-32">
						<p
							className="
							hidden
							lg:block
							px-4 
							py-2 
							text-sm 
							border 
							border-neutral-500 
							rounded-lg
						"
						>
							Finish
						</p>
					</div>
					{/* LISTED AT */}
					<p className="hidden lg:block text-sm text-neutral-500 font-light right-0 whitespace-nowrap">
						2 days ago
					</p>
				</span>
				<hr />
			</section>
		</main>
	);
};

export default Listings;
