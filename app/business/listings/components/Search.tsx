'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useCallback } from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
	const router = useRouter();
	const params = useSearchParams();
	const query = params?.get('query');

	const onChange = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			const url = `/kennel/business/listing?query=${e.target.value}`;
			router.push(url);
		},
		[router]
	);

	return (
		<div
			className="
						flex
						flex-row
						items-center
						gap-2
						px-3
						py-1
						border 
						border-neutral-400
						rounded-full 
						bg-neutral-100
						bg-opacity-75
						w-full
						lg:w-96
					"
		>
			<BiSearch />
			<input
				onChange={onChange}
				value={query || ''}
				className="
              peer
              w-full
              outline-none
            "
			/>
			<p className="font-light text-neutral-500 text-sm">Search Listings</p>
		</div>
	);
};

export default Search;
