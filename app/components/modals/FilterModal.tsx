'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { useCallback } from 'react';

import { useFilterContext } from '@/app/hooks/useFilterContext';
import useFilterModal from '@/app/hooks/useFilterModal';
import AgeInput from '../filter/AgeInput';
import BreedInput from '../filter/BreedInput';
import GenderInput from '../filter/GenderInput';
import MiscInput from '../filter/MiscInput';
import OriginInput from '../filter/OriginInput';
import PriceInput from '../filter/PriceInput';
import SaleTypeInput from '../filter/SaleTypeInput';
import SpeciesInput from '../filter/SpeciesInput';
import VaccineInput from '../filter/VaccineInput';
import Modal from './Modal';

const FilterModal = () => {
	const router = useRouter();
	const params = useSearchParams();
	const filterModal = useFilterModal();

	const {
		saleType,
		species,
		breeds,
		minPrice,
		maxPrice,
		minAge,
		maxAge,
		gender,
		origins,
		vaccines,
		options,
		timeUnit,
	} = useFilterContext();

	const onSubmit = useCallback(async () => {
		let currentQuery = {};

		if (params) {
			currentQuery = qs.parse(params.toString());
		}

		const speciesIds = species.map((item) => item.id);
		const breedIds = breeds.map((item) => item.id);
		const originIds = origins.map((item) => item.id);
		const vaccineIds = vaccines.map((item) => item.id);

		const updatedQuery: any = {
			...currentQuery,
			saleType,
			speciesIds,
			breedIds,
			minPrice,
			maxPrice,
			minAge,
			maxAge,
			timeUnit,
			gender,
			originIds,
			vaccineIds,
			options,
		};

		const url = qs.stringifyUrl(
			{
				url: '/kennel/explore/',
				query: updatedQuery,
			},
			{ skipNull: true }
		);

		filterModal.onClose();
		router.push(url);
	}, [
		saleType,
		species,
		breeds,
		minPrice,
		maxPrice,
		minAge,
		maxAge,
		timeUnit,
		gender,
		origins,
		vaccines,
		options,
		filterModal,
		router,
		params,
	]);

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
			<VaccineInput />
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
			actionLabel="Filter"
			body={bodyContent}
		/>
	);
};

export default FilterModal;
