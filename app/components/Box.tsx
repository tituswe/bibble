'use client';

import { useRouter } from 'next/navigation';
import { IconType } from 'react-icons';
import { toCamelCase } from '../utils/toCamelCase';

interface BoxProps {
	label: string;
	icon: IconType;
	selected?: boolean;
	disabled?: boolean;
}

const Box: React.FC<BoxProps> = ({ label, selected, icon: Icon, disabled }) => {
	const router = useRouter();

	return (
		<div
			onClick={() => {
				router.push(`/${label}`);
			}}
			className={`
        flex
        flex-col
        items-center
        justify-center
        gap-2
        p-3
        border-b-2
        ${!disabled && 'hover:text-neutral-800'}
        transition
        cursor-pointer
        ${selected ? 'border-b-sky-500' : 'border-transparent'}
        ${selected ? 'text-neutral-800' : 'text-neutral-500'}
				${disabled && 'text-neutral-300'}
      `}
		>
			<Icon size={26} />
			<div className="font-medium text-sm">{toCamelCase(label)}</div>
		</div>
	);
};

export default Box;
