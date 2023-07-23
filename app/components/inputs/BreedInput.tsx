'use client';

import { IconType } from 'react-icons';

interface BreedInputProps {
	icon: IconType;
	label: string;
	selected?: boolean;
	onClick: (value: string) => void;
}

const BreedInput: React.FC<BreedInputProps> = ({
	icon: Icon,
	label,
	selected,
	onClick,
}) => {
	return (
		<div
			onClick={() => onClick(label)}
			className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:border-black
        transition
        cursor-pointer
        ${selected ? 'text-sky-500' : 'text-black'}
        ${selected ? 'border-sky-500' : 'border-neutral-200'}
      `}
		>
			<Icon size={30} />
			<div className="font-semibold">{label}</div>
		</div>
	);
};

export default BreedInput;
