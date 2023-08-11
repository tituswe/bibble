'use client';

import { Breed } from '@prisma/client';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const BreedInput = () => {
	const [value, setValue] = useState('');
	const [selected, setSelected] = useState<Array<Breed>>([]);

	return (
		<div
			className="
				flex
				flex-col
				gap-6
			"
		>
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
          peer-focus:-translate-y-5
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
				</div>
			</div>
			<div className="flex flex-row gap-4">
				<div className="p-4 border-[1px] rounded-3xl">Husky</div>
				<div className="p-4 border-[1px] rounded-3xl">Corgi</div>
				<div className="p-4 border-[1px] rounded-3xl">German Sheperd</div>
			</div>
		</div>
	);
};
export default BreedInput;
