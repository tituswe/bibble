'use client';

import { useFilterContext } from '@/app/hooks/useFilterContext';
import { Vaccine } from '@prisma/client';
import { useCallback } from 'react';
import CheckBox from '../CheckBox';

const VaccineInput = () => {
	const { allVaccines, vaccines, setVaccines } = useFilterContext();

	const onCheck = useCallback(
		(item: Vaccine) => {
			const vaccinesIds = vaccines.map((item) => item.id);
			if (vaccinesIds.includes(item.id)) {
				setVaccines(vaccines.filter((e) => e.id !== item.id));
			} else {
				setVaccines([...vaccines, item]);
			}
		},
		[vaccines, setVaccines]
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
					{allVaccines.map((item, i) => (
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
								isChecked={vaccines.includes(item)}
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
