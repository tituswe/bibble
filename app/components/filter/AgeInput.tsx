'use client';

import { useCallback, useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const AgeInput = () => {
	const [isOpen, setIsOpen] = useState(true);
	const [timeUnit, setTimeUnit] = useState('Months');
	const MIN = 0;
	const MAX = timeUnit === 'Months' ? 12 : 24;
	const [minValue, setMinValue] = useState(MIN);
	const [maxValue, setMaxValue] = useState(MAX);

	const toggleOpen = useCallback(() => {
		setIsOpen(!isOpen);
	}, [isOpen]);

	const selectTimeUnit = useCallback((e: string) => {
		setTimeUnit(e);
		setIsOpen(false);
	}, []);

	return (
		<div
			className="
				flex
				flex-col
				gap-6
			"
		>
			<div className="font-semibold text-2xl">Age range</div>
			{/* AGE INPUTS */}
			<div
				className="
					flex
					flex-row
					justify-between
					items-start
					px-4
					gap-8
				"
			>
				{/* LEFT SIDE */}
				<div
					className="
					flex
					flex-col
					gap-8
					w-full
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
							Minimum Age
						</div>
						<div
							className="
							flex
							flex-row
							gap-1
							items-end
						"
						>
							<input
								type="number"
								value={minValue}
								onChange={(e) => {
									const newValue = parseInt(e.target.value);

									setMinValue(newValue > MAX ? maxValue : newValue);
								}}
								min="0"
								maxLength={3}
								className="
								outline-none
								[appearance:textfield]
								[&::-webkit-outer-spin-button]:appearance-none
								[&::-webkit-inner-spin-button]:appearance-none
							"
							/>
							<div className="font-light text-sm text-neutral-500">
								{timeUnit}
							</div>
						</div>
					</div>
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
							Maximum Age
						</div>
						<div
							className="
							flex
							flex-row
							gap-1
							items-end
						"
						>
							<input
								type="number"
								value={maxValue}
								onChange={(e) => {
									const newValue = parseInt(e.target.value);

									setMaxValue(newValue > MAX ? maxValue : newValue);
								}}
								min="0"
								maxLength={3}
								className="
								outline-none
								[appearance:textfield]
								[&::-webkit-outer-spin-button]:appearance-none
								[&::-webkit-inner-spin-button]:appearance-none
							"
							/>
							<div className="font-light text-sm text-neutral-500">
								{timeUnit}
							</div>
						</div>
					</div>
				</div>
				{/* RIGHT SIDE */}
				<div className="flex justify-center w-full">
					<div
						className="
					flex
					flex-col
					gap-4
					w-1/2
					items-start
				"
					>
						<div
							onClick={toggleOpen}
							className={`
								flex
								flex-row
								w-full
								p-4
								border-[1px]
								rounded-3xl
								items-center
								justify-between
								cursor-pointer
								${isOpen && 'shadow-xl'}
								hover:shadow-inner
								hover:bg-neutral-200
								transition
						`}
						>
							{timeUnit}
							<AiOutlineDown />
						</div>
						{isOpen && (
							<div
								className="
							flex
							flex-col
							w-full
							border-[1px]
							rounded-xl
						"
							>
								<div
									onClick={() => selectTimeUnit('Months')}
									className="
									cursor-pointer
									hover:shadow-inner
									hover:bg-neutral-200
									p-4
									rounded-t-xl
									transition
								"
								>
									Months
								</div>
								<hr />
								<div
									onClick={() => selectTimeUnit('Years')}
									className="
									cursor-pointer
									hover:shadow-inner
									hover:bg-neutral-200
									p-4
									rounded-b-xl
									transition
								"
								>
									Years
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default AgeInput;
