'use client';

import { useFilterContext } from '@/app/hooks/useFilterContext';
import { usePriceRange } from '@/app/hooks/usePriceRange';
import { BiDollar } from 'react-icons/bi';
import ReactSlider from 'react-slider';

const PriceInput = () => {
	const { allPets, minPrice, setMinPrice, maxPrice, setMaxPrice } =
		useFilterContext();
	const { MIN_PRICE, MAX_PRICE } = usePriceRange(allPets);

	return (
		<div
			className="
				flex
				flex-col
				gap-6
			"
		>
			<div className="font-semibold text-2xl">Price range</div>
			{/* PRICE TOGGLE */}
			<ReactSlider
				className="flex items-center m-4"
				thumbClassName="
					h-8 
					w-8  
					text-clip 
					bg-white 
					text-white 
					text-xs
					rounded-full 
					border-[2px]
					border-sky-500
					hover:bg-neutral-200
					hover:shadow-2xl
					hover:text-neutral-200
					cursor-grab
				"
				trackClassName="
					h-1 
					bg-neutral-800
					rounded-full
				"
				defaultValue={[MIN_PRICE, MAX_PRICE]}
				value={[minPrice, maxPrice]}
				onChange={([min, max]) => {
					setMinPrice(min);
					setMaxPrice(max);
				}}
				max={MAX_PRICE}
				step={100}
				ariaLabel={['Lower thumb', 'Upper thumb']}
				ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
			/>
			{/* PRICE INPUTS */}
			<div
				className="
					flex
					flex-row
					justify-between
					items-center
					px-4
				"
			>
				{/* MINIMUM */}
				<div
					className="
						flex
						flex-col
						gap-1
						px-4
						py-2
						border-[1px]
						rounded-xl
					"
				>
					<div className="text-light text-neutral-500 text-xs">
						Minimum Price
					</div>
					<div
						className="
							flex
							flex-row
							gap-1
							items-center
						"
					>
						<BiDollar />
						<input
							type="number"
							value={minPrice}
							onChange={(e) => {
								const newPrice = parseInt(e.target.value);

								setMinPrice(newPrice > MAX_PRICE ? maxPrice : newPrice);
							}}
							onBlur={() => {
								if (minPrice > maxPrice) {
									setMinPrice(maxPrice);
								}
							}}
							step="100"
							min="0"
							className="
								outline-none
								[appearance:textfield]
								[&::-webkit-outer-spin-button]:appearance-none
								[&::-webkit-inner-spin-button]:appearance-none
							"
						/>
					</div>
				</div>
				{/* LINE */}
				<div className="border-[1px] w-full m-4"></div>
				{/* MAX_PRICEIMUM */}
				<div
					className="
						flex
						flex-col
						gap-1
						px-4
						py-2
						border-[1px]
						rounded-xl
					"
				>
					<div className="text-light text-neutral-500 text-xs">
						Maximum Price
					</div>
					<div
						className="
							flex
							flex-row
							gap-1
							items-center
						"
					>
						<BiDollar />
						<input
							type="number"
							value={maxPrice}
							onChange={(e) => {
								const newPrice = parseInt(e.target.value);

								setMaxPrice(newPrice > MAX_PRICE ? maxPrice : newPrice);
							}}
							onBlur={() => {
								if (maxPrice < minPrice) {
									setMaxPrice(minPrice);
								}
							}}
							step="100"
							min="0"
							className="
								outline-none
								[appearance:textfield]
								[&::-webkit-outer-spin-button]:appearance-none
								[&::-webkit-inner-spin-button]:appearance-none
							"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default PriceInput;
