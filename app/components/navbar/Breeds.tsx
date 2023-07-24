'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import BreedBox from '../BreedBox';
import Container from '../Container';

import { IconType } from 'react-icons';
import {
	TbZodiacAquarius,
	TbZodiacAries,
	TbZodiacCancer,
	TbZodiacCapricorn,
	TbZodiacGemini,
	TbZodiacLeo,
	TbZodiacLibra,
	TbZodiacPisces,
	TbZodiacSagittarius,
	TbZodiacScorpio,
	TbZodiacTaurus,
	TbZodiacVirgo,
} from 'react-icons/tb';

export type Breed = {
	label: string;
	icon: IconType;
};

export const breeds: Breed[] = [
	{
		label: 'Labrador',
		icon: TbZodiacSagittarius,
	},
	{
		label: 'G. Sheperd',
		icon: TbZodiacCapricorn,
	},
	{
		label: 'G. Retriever',
		icon: TbZodiacAquarius,
	},
	{
		label: 'Bulldog',
		icon: TbZodiacAries,
	},
	{
		label: 'Beagle',
		icon: TbZodiacLibra,
	},
	{
		label: 'Poodle',
		icon: TbZodiacScorpio,
	},
	{
		label: 'Rottweiler',
		icon: TbZodiacVirgo,
	},
	{
		label: 'Husky',
		icon: TbZodiacTaurus,
	},
	{
		label: 'Dachshund',
		icon: TbZodiacPisces,
	},
	{
		label: 'Doberman',
		icon: TbZodiacGemini,
	},
	{
		label: 'Great Dane',
		icon: TbZodiacLeo,
	},
	{
		label: 'Corgi',
		icon: TbZodiacCancer,
	},
];

const Breeds = () => {
	const params = useSearchParams();
	const breed = params?.get('breed');
	const pathname = usePathname();

	const isMainPage = pathname === '/';

	if (!isMainPage) {
		return null;
	}

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
        "
			>
				{breeds.map((b) => (
					<BreedBox
						key={b.label}
						label={b.label}
						selected={breed === b.label}
						icon={b.icon}
					/>
				))}
			</div>
		</Container>
	);
};

export default Breeds;
