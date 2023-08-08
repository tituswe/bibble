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
	const pathname = usePathname() || '';
	const isUnlocked = scrollY > 24;
	const offsets: Record<string, string> = {
		featured: '-translate-x-28',
		explore: '',
		rescue: 'translate-x-28',
	};
	console.log(pathname);

	return (
		<Container>
			<div
				className={`
					flex 
					flex-col
					bg-white
					rounded-full
					py-4
					px-8
					transition
					translate
					duration-300
					items-center
					${isUnlocked && 'shadow-lg'}
					${isUnlocked && 'hover:translate-y-20'}
				`}
			>
				<div
					className={`
          flex
          flex-row
          items-center
          justify-between
					gap-8
        `}
				>
					{pages.map((p, i) => (
						<Box
							key={i}
							label={p.label}
							selected={pathname === `/${p.label}`}
							icon={p.icon}
							disabled={p.disabled}
						/>
					))}
				</div>
				<div
					className={`
						w-[56px]
						border-[1px]
						border-sky-500
						transition
						duration-100
						${offsets[pathname.substring(1)]}
					`}
				></div>
			</div>
		</Container>
	);
};

export default Pages;
