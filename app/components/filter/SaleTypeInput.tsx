'use client';

import { toCamelCase } from '@/app/utils/toCamelCase';
import { useCallback, useState } from 'react';
import { IconType } from 'react-icons';
import {
	AiOutlineCloud,
	AiOutlineMedicineBox,
	AiOutlineShop,
} from 'react-icons/ai';

enum Position {
	LEFT,
	MIDDLE,
	RIGHT,
}

interface SaleTypeOptionProps {
	label: string;
	icon: IconType;
	position: Position;
	description: string;
	selected?: boolean;
	onClick?: (e: any) => void;
}

const SaleTypeOption: React.FC<SaleTypeOptionProps> = ({
	label,
	icon: Icon,
	position,
	description,
	selected,
	onClick,
}) => {
	return (
		<div
			onClick={onClick}
			className={`
			flex 
			flex-col 
			p-4 
			border-[1px] 
			${
				position === Position.LEFT
					? 'rounded-l-2xl'
					: position === Position.RIGHT
					? 'rounded-r-2xl'
					: 'rounded-none'
			}
			w-[200px]
			items-center
			hover:shadow-inner
			hover:bg-neutral-100
			${selected && 'bg-neutral-100'}
		`}
		>
			<div className="flex flex-row items-center gap-2">
				<div className="font-semibold">{toCamelCase(label)}</div>
				<div className="text-lg text-neutral-500">
					<Icon />
				</div>
			</div>
			<div className="text-sm text-neutral-500">{description}</div>
		</div>
	);
};

const SaleTypeInput = () => {
	const [selected, setSelected] = useState('any');

	const onClick = useCallback((label: string) => {
		setSelected(label);
	}, []);

	const saleTypes = [
		{
			label: 'any',
			icon: AiOutlineCloud,
			description: 'Any type',
		},
		{
			label: 'sale',
			icon: AiOutlineShop,
			description: 'From a verified seller',
		},
		{
			label: 'rescue',
			icon: AiOutlineMedicineBox,
			description: 'From an adoption home',
		},
	];

	return (
		<div className="flex flex-col justify-center gap-4">
			<div className="font-semibold text-xl">Type of pet</div>
			<div className="flex flex-row justify-center">
				{saleTypes.map((item, i) => (
					<SaleTypeOption
						key={i}
						label={item.label}
						icon={item.icon}
						description={item.description}
						position={
							i === 0
								? Position.LEFT
								: i === saleTypes.length - 1
								? Position.RIGHT
								: Position.MIDDLE
						}
						selected={selected === item.label}
						onClick={() => onClick(item.label)}
					/>
				))}
			</div>
			<div className="font-light text-sm">
				Find a pet from one of our verified sellers or loving adoption homes.
			</div>
		</div>
	);
};
export default SaleTypeInput;
