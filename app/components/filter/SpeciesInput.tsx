'use client';

import { useCallback, useState } from 'react';
import { BiSolidCat, BiSolidDog } from 'react-icons/bi';
import { GiFoxTail, GiRabbit, GiReptileTail } from 'react-icons/gi';
import { PiBirdFill } from 'react-icons/pi';
import Box from '../Box';

const SpeciesInput = () => {
	const [selected, setSelected] = useState<Array<string>>([]);

	const onClick = useCallback(
		(label: string) => {
			if (selected.includes(label)) {
				setSelected(selected.filter((e) => e !== label));
			} else {
				setSelected([...selected, label]);
			}
		},
		[selected]
	);

	const species = [
		{
			name: 'dog',
			icon: BiSolidDog,
		},
		{
			name: 'cat',
			icon: BiSolidCat,
		},
		{
			name: 'bird',
			icon: PiBirdFill,
		},
		{
			name: 'rabbit',
			icon: GiRabbit,
		},
		{
			name: 'rodent',
			icon: GiFoxTail,
		},
		{
			name: 'reptile',
			icon: GiReptileTail,
		},
	];

	return (
		<div
			className="
				flex
				flex-row
				gap-4
				justify-between
			"
		>
			{species.map((item, i) => (
				<Box
					key={i}
					label={item.name}
					icon={item.icon}
					selected={selected.includes(item.name)}
					onClick={() => onClick(item.name)}
				/>
			))}
		</div>
	);
};
export default SpeciesInput;
