'use client';

import { useState } from 'react';
import { BiDollar } from 'react-icons/bi';

const PriceInput = () => {
	const [minValue, setMinValue] = useState(0);
	const [maxValue, setMaxValue] = useState(0);

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
			<div className="flex flex-row w-full justify-center items-center">
				<div className="flex flex-row w-full justify-between">
					<div className="p-4 rounded-full bg-white border-[1px] z-10"></div>
					<div className="p-4 rounded-full bg-white border-[1px] z-10"></div>
				</div>
				<div className="absolute w-5/6 items-center h-[2px] bg-neutral-800"></div>
			</div>
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
					<div className="text-light text-neutral-500 text-xs">Minimum</div>
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
							value={minValue}
							onChange={(e) => setMinValue(parseInt(e.target.value))}
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
					<div className="text-light text-neutral-500 text-xs">Maximum</div>
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
							value={maxValue}
							onChange={(e) => setMaxValue(parseInt(e.target.value))}
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
