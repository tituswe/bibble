'use client';

import { IconType } from 'react-icons';
import { toCamelCase } from '../utils/toCamelCase';

interface BoxProps {
	key: number;
	label: string;
	icon: IconType;
	selected?: boolean;
	disabled?: boolean;
	onClick?: (e: any) => void;
}

const Box: React.FC<BoxProps> = ({
	label,
	selected,
	icon: Icon,
	disabled,
	onClick,
}) => {
	return (
		<div
			onClick={onClick}
			className={`
        flex
        flex-col
        items-center
        justify-center
        gap-2
        p-3
        transition
				w-[80px]
        ${!disabled && 'hover:text-neutral-800'}
        ${!disabled && 'cursor-pointer'}
        ${
					disabled
						? 'text-neutral-200'
						: selected
						? 'text-sky-500'
						: 'text-neutral-500'
				}
      `}
		>
			<Icon size={26} />
			<div className="font-medium text-sm">{toCamelCase(label)}</div>
		</div>
	);
};

export default Box;
