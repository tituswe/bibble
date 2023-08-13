'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { useCallback, useState } from 'react';

import useFilterModal from '@/app/hooks/useFilterModal';
import { SafePet, TimeUnit } from '@/app/types';
import {
	Breed,
	Country,
	Gender,
	SaleType,
	Species,
	Vaccine,
} from '@prisma/client';
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

interface FilterModalProps {
	data: {
		allPets: SafePet[];
		allSpecies: Species[];
		allBreeds: Breed[];
		allOrigins: Country[];
		allVaccines: Vaccine[];
	};
}

const FilterModal: React.FC<FilterModalProps> = ({ data }) => {
	const { allSpecies, allBreeds, allOrigins, allVaccines } = data;

	const router = useRouter();
	const params = useSearchParams();
	const filterModal = useFilterModal();

	const MIN_PRICE = 0;
	const MAX_PRICE = 10000;
	const [timeUnit, setTimeUnit] = useState<TimeUnit>('months');
	const MIN_AGE = 0;
	const MAX_AGE = timeUnit === 'months' ? 12 : 24;
	const medicalOptions = [
		{ field: 'isHealthTested', label: 'Health Tested' },
		{ field: 'isNeutered', label: ' Neutered' },
		{ field: 'isHypoallergenic', label: 'Hypoallergenic' },
	];
	const otherOptions = [
		{ field: 'isHdbApproved', label: 'HDB Approved' },
		{ field: 'isPottyTrained', label: 'Potty Trained' },
	];

	const [saleType, setSaleType] = useState<SaleType | ''>('');
	const [species, setSpecies] = useState<Array<Species>>([]);
	const [breeds, setBreeds] = useState<Array<Breed>>([]);
	const [minPrice, setMinPrice] = useState<number>(MIN_PRICE);
	const [maxPrice, setMaxPrice] = useState<number>(MAX_PRICE);
	const [minAge, setMinAge] = useState<number>(MIN_AGE);
	const [maxAge, setMaxAge] = useState<number>(MAX_AGE);
	const [gender, setGender] = useState<Gender | ''>('');
	const [origins, setOrigins] = useState<Array<Country>>([]);
	const [vaccines, setVaccines] = useState<Array<Vaccine>>([]);
	console.log(vaccines);
	const [options, setOptions] = useState<Array<string>>([]);

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
			<SaleTypeInput selected={saleType} setSelected={setSaleType} />
			<hr />
			<SpeciesInput
				selected={species}
				setSelected={setSpecies}
				species={allSpecies}
			/>
			<hr />
			<BreedInput
				selected={breeds}
				setSelected={setBreeds}
				breeds={allBreeds}
			/>
			<hr />
			<PriceInput
				MIN={MIN_PRICE}
				MAX={MAX_PRICE}
				minValue={minPrice}
				setMinValue={setMinPrice}
				maxValue={maxPrice}
				setMaxValue={setMaxPrice}
			/>
			<hr />
			<AgeInput
				MIN={MIN_AGE}
				MAX={MAX_AGE}
				minValue={minAge}
				setMinValue={setMinAge}
				maxValue={maxAge}
				setMaxValue={setMaxAge}
				timeUnit={timeUnit}
				setTimeUnit={setTimeUnit}
			/>
			<hr />
			<OriginInput
				selected={origins}
				setSelected={setOrigins}
				origins={allOrigins}
			/>
			<hr />
			<GenderInput selected={gender} setSelected={setGender} />
			<hr />
			<VaccineInput
				selected={vaccines}
				setSelected={setVaccines}
				vaccines={allVaccines}
			/>
			<hr />
			<MiscInput
				selected={options}
				setSelected={setOptions}
				medicalOptions={medicalOptions}
				otherOptions={otherOptions}
			/>
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
