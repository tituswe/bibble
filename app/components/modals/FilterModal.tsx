'use client';

import { formatISO } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { useCallback, useState } from 'react';
import { Range } from 'react-date-range';

import useFilterModal from '@/app/hooks/useFilterModal';
import AgeInput from '../filter/AgeInput';
import BreedInput from '../filter/BreedInput';
import GenderInput from '../filter/GenderInput';
import MiscInput from '../filter/MiscInput';
import OriginInput from '../filter/OriginInput';
import PriceInput from '../filter/PriceInput';
import SaleTypeInput from '../filter/SaleTypeInput';
import SpeciesInput from '../filter/SpeciesInput';
import Modal from './Modal';

const SearchModal = () => {
	const router = useRouter();
	const params = useSearchParams();
	const filterModal = useFilterModal();

	const [gender, setGender] = useState('');
	const [breed, setBreed] = useState('');
	const [ageRange, setAgeRange] = useState<Range>({
		startDate: new Date(),
		endDate: new Date(),
		key: 'selection',
	});

	const onSet = useCallback(
		(input: string, curr: string, setFn: (value: string) => void) => {
			if (input == curr) {
				input == '';
			}

			setFn(input);
		},
		[]
	);

	const onSubmit = useCallback(async () => {
		let currentQuery = {};

		if (params) {
			currentQuery = qs.parse(params.toString());
		}

		const updatedQuery: any = {
			...currentQuery,
			gender,
			breed,
		};

		if (ageRange.startDate) {
			updatedQuery.startDate = formatISO(ageRange.startDate);
		}

		if (ageRange.endDate) {
			updatedQuery.endDate = formatISO(ageRange.endDate);
		}

		const url = qs.stringifyUrl(
			{
				url: '/',
				query: updatedQuery,
			},
			{ skipNull: true }
		);

		filterModal.onClose();
		router.push(url);
	}, [breed, gender, ageRange, filterModal, router, params]);

	const bodyContent = (
		<div className="flex flex-col gap-8">
			<SaleTypeInput />
			<hr />
			<SpeciesInput />
			<hr />
			<BreedInput />
			<hr />
			<PriceInput />
			<hr />
			<AgeInput />
			<hr />
			<OriginInput />
			<hr />
			<GenderInput />
			<hr />
			<MiscInput />
		</div>
	);

	return (
		<Modal
			isOpen={filterModal.isOpen}
			onClose={filterModal.onClose}
			onSubmit={onSubmit}
			title="Filters"
			actionLabel="Search"
			body={bodyContent}
		/>
	);
};

export default SearchModal;
