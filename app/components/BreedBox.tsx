'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { useCallback } from 'react';
import { IconType } from 'react-icons';

interface BreedBoxProps {
	label: string;
	icon: IconType;
	selected?: boolean;
}

const BreedBox: React.FC<BreedBoxProps> = ({ label, selected, icon: Icon }) => {
	const router = useRouter();
	const params = useSearchParams();

	const handleClick = useCallback(() => {
		let currentQuery = {};

		if (params) {
			currentQuery = qs.parse(params.toString());
		}

		const updatedQuery: any = {
			...currentQuery,
			breed: label,
		};

		if (params?.get('breed') === label) {
			delete updatedQuery.breed;
		}

		const url = qs.stringifyUrl(
			{
				url: '/',
				query: updatedQuery,
			},
			{ skipNull: true }
		);

		router.push(url);
	}, [label, params, router]);

	return (
		<div
			onClick={handleClick}
			className={`
        flex
        flex-col
        items-center
        justify-center
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? 'border-b-sky-500' : 'border-transparent'}
        ${selected ? 'text-neutral-800' : 'text-neutral-500'}
      `}
		>
			<Icon size={26} />
			<div className="font-medium text-sm">{label}</div>
		</div>
	);
};

export default BreedBox;
