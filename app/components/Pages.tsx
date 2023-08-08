'use client';

import { usePathname } from 'next/navigation';
import Box from './Box';
import Container from './Container';

import { IconType } from 'react-icons';
import { BiBulb, BiCompass, BiHomeHeart } from 'react-icons/bi';

export type Page = {
	label: string;
	icon: IconType;
	disabled?: boolean;
};

export const pages: Page[] = [
	{
		label: 'featured',
		icon: BiBulb,
	},
	{
		label: 'explore',
		icon: BiCompass,
	},
	{
		label: 'rescue',
		icon: BiHomeHeart,
		disabled: true,
	},
];

interface PagesProps {
	scrollY: number;
}

const Pages: React.FC<PagesProps> = ({ scrollY }) => {
	const isUnlocked = scrollY > 24;
	const pathname = usePathname();

	return (
		<Container>
			<div
				className={`
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto
					gap-8
					bg-white
					rounded-full
					py-4
					px-8
					transition
					translate
					duration-300
					${isUnlocked && 'shadow-lg'}
					${isUnlocked && 'hover:translate-y-20'}
        `}
			>
				{pages.map((p) => (
					<Box
						key={p.label}
						label={p.label}
						selected={pathname === `/${p.label}`}
						icon={p.icon}
						disabled={p.disabled}
					/>
				))}
			</div>
		</Container>
	);
};

export default Pages;
