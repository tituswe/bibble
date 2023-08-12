'use client';

import { Vaccine } from '@prisma/client';
import { useCallback, useState } from 'react';
import { BiHealth, BiListCheck } from 'react-icons/bi';
import { LuSyringe } from 'react-icons/lu';
import CheckBox from '../CheckBox';

interface MiscInputProps {
	vaccines: Vaccine[];
}

const MiscInput: React.FC<MiscInputProps> = ({ vaccines }) => {
	const medicalOptions = ['Health Tested', 'Neutered', 'Hypoallergenic'];
	const otherOptions = ['AVS License', 'HDB Approved', 'Potty Trained'];

	const [selected, setIsSelected] = useState<string[]>([]);

	const onCheck = useCallback(
		(item: string) => {
			if (selected.includes(item)) {
				setIsSelected(selected.filter((e) => e !== item));
			} else {
				setIsSelected([...selected, item]);
			}
		},
		[selected]
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
								isChecked={selected.includes(item)}
								setIsChecked={() => onCheck(item)}
							/>
							<div className="font-light">{item}</div>
						</div>
					))}
				</div>
			</div>
			{/* VACCINE INPUTS */}
			<div
				className="
					flex
					flex-col
					gap-6
				"
			>
				<div className="flex flex-row gap-2 items-center">
					<LuSyringe />
					<div className="font-semibold">Vaccines</div>
				</div>
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
								isChecked={selected.includes(item.name)}
								setIsChecked={() => onCheck(item.name)}
							/>
							<div className="font-light">{item.name}</div>
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
								isChecked={selected.includes(item)}
								setIsChecked={() => onCheck(item)}
							/>
							<div className="font-light">{item}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MiscInput;
