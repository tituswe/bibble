'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { ChangeEvent, useCallback } from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
	const router = useRouter();
	const params = useSearchParams();
	const query = params?.get('query');

	const onChange = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			const query = { query: e.target.value };
			const url = qs.stringifyUrl({
				url: '/business/listings/',
				query: query,
			});
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
					font-light
					text-sm
        "
			/>
			<label
				className={`
					absolute
					pl-2
					left-16
					duration-150
					origin-[0]
					transform
					peer-placeholder-shown:scale-100
					peer-placeholder-shown:translate-y-0
					peer-focus:scale-75
					peer-focus:-translate-y-4
					peer-focus:bg-white
					peer-focus:rounded-3xl
					peer-focus:px-2
					${query && 'scale-75'}
					${query && '-translate-y-4'}
					${query && 'bg-white'}
					${query && 'rounded-3xl'}
					${query && 'px-2'}
					text-neutral-500
					font-light
					text-sm
				`}
			>
				Search Listings
			</label>
		</div>
	);
};

export default Search;
