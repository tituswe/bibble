'use client';

import { BiDollar } from 'react-icons/bi';
import ReactSlider from 'react-slider';

interface PriceInputProps {
	MIN: number;
	MAX: number;
	minValue: number;
	setMinValue: (e: number) => void;
	maxValue: number;
	setMaxValue: (e: number) => void;
}

const PriceInput: React.FC<PriceInputProps> = ({
	MIN,
	MAX,
	minValue,
	setMinValue,
	maxValue,
	setMaxValue,
}) => {
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
							value={minValue}
							onChange={(e) => {
								const newValue = parseInt(e.target.value);

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
							value={maxValue}
							onChange={(e) => {
								const newValue = parseInt(e.target.value);

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
