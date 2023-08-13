'use client';

import { Vaccine } from '@prisma/client';
import { useCallback } from 'react';
import CheckBox from '../CheckBox';

interface VaccineInputProps {
	selected: Array<Vaccine>;
	setSelected: (e: Array<Vaccine>) => void;
	vaccines: Vaccine[];
}

const VaccineInput: React.FC<VaccineInputProps> = ({
	selected,
	setSelected,
	vaccines,
}) => {
	const onCheck = useCallback(
		(item: Vaccine) => {
			const selectedIds = selected.map((item) => item.id);
			if (selectedIds.includes(item.id)) {
				setSelected(selected.filter((e) => e.id !== item.id));
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
			<div className="font-semibold text-2xl">Vaccinations</div>
			{/* VACCINE INPUTS */}
			<div
				className="
					flex
					flex-col
					gap-6
				"
			>
				<div
					className="
						grid
						grid-cols-2
						gap-6
					"
				>
					{vaccines.map((item, i) => (
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
								isChecked={selected.includes(item)}
								setIsChecked={() => onCheck(item)}
							/>
							<div className="font-light">{item.name}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default VaccineInput;
