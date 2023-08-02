'use client';

import { usePathname } from 'next/navigation';
import Box from '../Box';
import Container from '../Container';

import { IconType } from 'react-icons';
import { BiBulb, BiCompass, BiHomeHeart, BiStar } from 'react-icons/bi';

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
		label: 'popular',
		icon: BiStar,
		disabled: true,
	},
	{
		label: 'rescue',
		icon: BiHomeHeart,
	},
];

const Pages = () => {
	const pathname = usePathname();

	return (
		<Container>
			<div
				className="
          pt-4
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto
					gap-8
        "
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
