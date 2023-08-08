'use client';

import { useRouter } from 'next/navigation';
import { IconType } from 'react-icons';
import { toCamelCase } from '../utils/toCamelCase';

interface BoxProps {
	key: number;
	label: string;
	icon: IconType;
	selected?: boolean;
	disabled?: boolean;
}

const Box: React.FC<BoxProps> = ({
	key,
	label,
	selected,
	icon: Icon,
	disabled,
}) => {
	const router = useRouter();

	const delay = (ms: number) =>
		new Promise((resolve) => setTimeout(resolve, ms));

	const handleOnClick = async () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});

		await delay(900 * (1 - Math.exp(-window.scrollY * Math.PI)));
		router.push(`/${label}`);
	};

	return (
		<div
			onClick={handleOnClick}
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
						? 'text-neutral-800'
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
