'use client';

import { Species } from '@prisma/client';
import { useCallback } from 'react';
import { IconType } from 'react-icons';
import { AiOutlineQuestion } from 'react-icons/ai';
import { BiSolidCat, BiSolidDog } from 'react-icons/bi';
import { GiFoxTail, GiRabbit, GiReptileTail } from 'react-icons/gi';
import { PiBirdFill } from 'react-icons/pi';
import Box from '../Box';

interface SpeciesInputProps {
	selected: Array<Species>;
	setSelected: (e: Array<Species>) => void;
	species: Species[];
}

const SpeciesInput: React.FC<SpeciesInputProps> = ({
	selected,
	setSelected,
	species,
}) => {
	const iconMap: Record<string, IconType> = {
		dog: BiSolidDog,
		cat: BiSolidCat,
		bird: PiBirdFill,
		rabbit: GiRabbit,
		rodent: GiFoxTail,
		reptile: GiReptileTail,
	};

	const onClick = useCallback(
		(item: Species) => {
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
			<div className="font-semibold text-2xl">Species</div>
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
						icon={iconMap[item.name] || AiOutlineQuestion}
						selected={selected.includes(item)}
						onClick={() => onClick(item)}
					/>
				))}
			</div>
		</div>
	);
};
export default SpeciesInput;
