'use client';

import { useFilterContext } from '@/app/hooks/useFilterContext';
import { Breed } from '@prisma/client';
import { useCallback, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';

const BreedInput = () => {
	const [value, setValue] = useState('');
	const { allBreeds, breeds, setBreeds } = useFilterContext();

	const filteredBreeds = allBreeds
		.filter((item) => !breeds.includes(item))
		.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
		.sort((a, b) => {
			const indexOfA = a.name.toLowerCase().indexOf(value.toLowerCase());
			const indexOfB = b.name.toLowerCase().indexOf(value.toLowerCase());

			if (indexOfA === indexOfB) {
				return a.name.localeCompare(b.name);
			}

			return indexOfA - indexOfB;
		});

	const handleAdd = useCallback(
		(item: Breed) => {
			if (breeds.includes(item)) {
				return;
			}

			setBreeds([...breeds, item]);
		},
		[breeds, setBreeds]
	);

	const handleRemove = useCallback(
		(item: Breed) => {
			setBreeds(breeds.filter((e) => e !== item));
		},
		[breeds, setBreeds]
	);

	return (
		<div
			className="
				flex
				flex-col
			"
		>
			<div className="font-semibold pb-6 text-2xl">Breeds</div>
			<div
				className="
				flex
				flex-col
				border-[1px]
				rounded-3xl
				w-full
				px-4
				py-2
				hover:shadow-inner
			"
			>
				<div className="flex flex-row gap-2 items-center">
					<BiSearch />
					<input
						onChange={(e) => setValue(e.target.value)}
						value={value}
						className="
						peer
						w-full
						outline-none
					"
						list="breeds"
					/>
					<label
						className={`
					absolute
					pl-2
					left-16
          duration-150
					origin-[0]
          transform
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-6
          peer-focus:bg-white
          peer-focus:rounded-3xl
          peer-focus:px-2
					${value && 'scale-75'}
					${value && '-translate-y-5'}
					${value && 'bg-white'}
					${value && 'rounded-3xl'}
					${value && 'px-2'}
					text-neutral-500
        `}
					>
						Select breeds
					</label>
					<div
						onClick={() => setValue('')}
						className="
							p-2
							rounded-full
							transition
							text-neutral-500
							hover:text-rose-500
							hover:bg-rose-100
							hover:shadow-inner
						"
					>
						<RxCross2 />
					</div>
				</div>
			</div>
			{value && filteredBreeds.length > 0 && (
				<div
					className="
					flex
					flex-col
					w-full 
					max-h-96
					rounded-l-3xl 
					overflow-y-auto
					scrollbar-hide
					border-[1px] 
					mt-4
				"
				>
					{filteredBreeds.map((item, i) => (
						<div
							key={i}
							className={`
								p-6 
								${i !== filteredBreeds.length - 1 && 'border-b-[1px]'}
								cursor-pointer
								hover:bg-neutral-100 
								hover:shadow-inner
								transition
							`}
							onClick={() => handleAdd(item)}
						>
							{item.name}
						</div>
					))}
				</div>
			)}
			{breeds.length > 0 ? (
				<div className="flex flex-wrap gap-4 p-4">
					{breeds.map((item, i) => (
						<div
							key={i}
							className="
								p-4 
								border-[1px] 
								rounded-3xl
								hover:shadow-inner
								hover:bg-rose-100
								transition
								cursor-pointer
							"
							onClick={() => handleRemove(item)}
						>
							{item.name}
						</div>
					))}
				</div>
			) : (
				<div className="pt-4 px-4 text-neutral-500 text-light text-sm">
					Search for the breeds you love
				</div>
			)}
		</div>
	);
};

export default BreedInput;
