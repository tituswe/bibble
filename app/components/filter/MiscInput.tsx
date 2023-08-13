'use client';

import { useCallback } from 'react';
import { BiHealth, BiListCheck } from 'react-icons/bi';
import CheckBox from '../CheckBox';

interface MiscInputProps {
	selected: Array<string>;
	setSelected: (e: Array<string>) => void;
	medicalOptions: Array<{ field: string; label: string }>;
	otherOptions: Array<{ field: string; label: string }>;
}

const MiscInput: React.FC<MiscInputProps> = ({
	selected,
	setSelected,
	medicalOptions,
	otherOptions,
}) => {
	const onCheck = useCallback(
		(item: string) => {
			if (selected.includes(item)) {
				setSelected(selected.filter((e) => e !== item));
			} else {
				setSelected([...selected, item]);
			}
		},
		[selected, setSelected]
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
								isChecked={selected.includes(item.field)}
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
								isChecked={selected.includes(item.field)}
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
