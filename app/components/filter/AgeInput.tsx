'use client';

import { useAgeRange } from '@/app/hooks/useAgeRange';
import { useFilterContext } from '@/app/hooks/useFilterContext';
import { TimeUnit } from '@/app/types';
import { formatAge } from '@/app/utils/getAge';
import { toCamelCase } from '@/app/utils/toCamelCase';
import { useCallback, useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const AgeInput = () => {
	const [isOpen, setIsOpen] = useState(false);
	const {
		allPets,
		minAge,
		setMinAge,
		maxAge,
		setMaxAge,
		timeUnit,
		setTimeUnit,
	} = useFilterContext();
	const { MIN_AGE, MAX_AGE } = useAgeRange(allPets);

	const toggleOpen = useCallback(() => {
		setIsOpen(!isOpen);
	}, [isOpen]);

	const selectTimeUnit = useCallback(
		(e: TimeUnit) => {
			setTimeUnit(e);
			setIsOpen(false);
		},
		[setTimeUnit]
	);

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
								value={formatAge(minAge, timeUnit)}
								onChange={(e) => {
									const newValue = parseInt(e.target.value);

									setMinAge(
										newValue > MAX_AGE || newValue > maxAge ? maxAge : newValue
									);
								}}
								onBlur={() => {
									if (minAge > maxAge) {
										setMinAge(maxAge);
									}
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
								{toCamelCase(timeUnit)}
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
								value={formatAge(maxAge, timeUnit)}
								onChange={(e) => {
									const newValue = parseInt(e.target.value);

									setMaxAge(
										newValue > MAX_AGE || newValue < minAge ? maxAge : newValue
									);
								}}
								onBlur={() => {
									if (maxAge < minAge) {
										setMaxAge(minAge);
									}
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
								{toCamelCase(timeUnit)}
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
					w-full
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
								rounded-xl
								items-center
								justify-between
								cursor-pointer
								${isOpen && 'shadow-xl'}
								hover:shadow-inner
								hover:bg-neutral-200
								transition
						`}
						>
							{toCamelCase(timeUnit)}
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
									onClick={() => selectTimeUnit('months')}
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
									onClick={() => selectTimeUnit('years')}
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
