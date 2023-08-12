'use client';

import { useState } from 'react';
import { BiDollar } from 'react-icons/bi';
import ReactSlider from 'react-slider';

const PriceInput = () => {
	const MIN = 0;
	const MAX = 100;
	const [minValue, setMinValue] = useState(MIN);
	const [maxValue, setMaxValue] = useState(MAX);

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
				defaultValue={[MIN, MAX]}
				value={[minValue, maxValue]}
				onChange={([min, max]) => {
					setMinValue(min);
					setMaxValue(max);
				}}
				max={MAX}
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
							value={minValue * 100}
							onChange={(e) => {
								const newValue = parseInt(e.target.value) / 100;

								setMinValue(newValue > MAX ? maxValue : newValue);
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
				{/* MAXIMUM */}
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
							value={maxValue * 100}
							onChange={(e) => {
								const newValue = parseInt(e.target.value) / 100;

								setMaxValue(newValue > MAX ? maxValue : newValue);
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
