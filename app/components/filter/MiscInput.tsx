'use client';

import { useFilterContext } from '@/app/hooks/useFilterContext';
import { useCallback } from 'react';
import { BiHealth, BiListCheck } from 'react-icons/bi';
import CheckBox from '../CheckBox';

const MiscInput = () => {
	const { medicalOptions, otherOptions, options, setOptions } =
		useFilterContext();

	const onCheck = useCallback(
		(item: string) => {
			if (options.includes(item)) {
				setOptions(options.filter((e) => e !== item));
			} else {
				setOptions([...options, item]);
			}
		},
		[options, setOptions]
	);

	return (
		<div
			className="
				flex
				flex-col
				gap-6
			"
		>
			<div className="font-semibold text-2xl">Miscellaneous</div>
			{/* HEALTH INPUTS */}
			<div
				className="
					flex
					flex-col
					gap-6
				"
			>
				<div className="flex flex-row gap-2 items-center">
					<BiHealth />
					<div className="font-semibold">Medical</div>
				</div>
				<div
					className="
						grid
						grid-cols-2
						gap-6
					"
				>
					{medicalOptions.map((item, i) => (
						<div
							key={i}
							className="
								flex
								flex-row
								gap-4
								items-center
							"
						>
							<CheckBox
								isChecked={options.includes(item.field)}
								setIsChecked={() => onCheck(item.field)}
							/>
							<div className="font-light">{item.label}</div>
						</div>
					))}
				</div>
			</div>
			{/* OTHER INPUTS */}
			<div
				className="
					flex
					flex-col
					gap-6
				"
			>
				<div className="flex flex-row gap-2 items-center">
					<BiListCheck />
					<div className="font-semibold">Others</div>
				</div>
				<div
					className="
						grid
						grid-cols-2
						gap-6
					"
				>
					{otherOptions.map((item, i) => (
						<div
							key={i}
							className="
								flex
								flex-row
								gap-4
								items-center
							"
						>
							<CheckBox
								isChecked={options.includes(item.field)}
								setIsChecked={() => onCheck(item.field)}
							/>
							<div className="font-light">{item.label}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MiscInput;
