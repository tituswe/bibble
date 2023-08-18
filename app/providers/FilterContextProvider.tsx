'use client';

import {
	Breed,
	Country,
	Gender,
	SaleType,
	Species,
	Vaccine,
} from '@prisma/client';
import { useState } from 'react';
import { useAgeRange } from '../hooks/useAgeRange';
import { FilterContext } from '../hooks/useFilterContext';
import { usePriceRange } from '../hooks/usePriceRange';
import { SafePet, TimeUnit } from '../types';

export const FilterContextProvider = ({
	children,
	allPets,
	allSpecies,
	allBreeds,
	allOrigins,
	allVaccines,
}: {
	children: React.ReactNode;
	allPets: Array<SafePet>;
	allSpecies: Array<Species>;
	allBreeds: Array<Breed>;
	allOrigins: Array<Country>;
	allVaccines: Array<Vaccine>;
}) => {
	const [timeUnit, setTimeUnit] = useState<TimeUnit>('months');
	const { MIN_PRICE, MAX_PRICE } = usePriceRange(allPets);
	const { MIN_AGE, MAX_AGE } = useAgeRange(allPets);
	const medicalOptions = [
		{ field: 'isHealthTested', label: 'Health Tested' },
		{ field: 'isNeutered', label: ' Neutered' },
		{ field: 'isHypoallergenic', label: 'Hypoallergenic' },
	];
	const otherOptions = [
		{ field: 'isHdbApproved', label: 'HDB Approved' },
		{ field: 'isPottyTrained', label: 'Potty Trained' },
		{ field: 'avsLicense', label: 'AVS License' },
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
	const [options, setOptions] = useState<Array<string>>([]);

	return (
		<FilterContext.Provider
			value={{
				allPets,
				allSpecies,
				allBreeds,
				allOrigins,
				allVaccines,
				medicalOptions,
				otherOptions,
				saleType,
				setSaleType,
				species,
				setSpecies,
				breeds,
				setBreeds,
				minPrice,
				setMinPrice,
				maxPrice,
				setMaxPrice,
				minAge,
				setMinAge,
				maxAge,
				setMaxAge,
				gender,
				setGender,
				origins,
				setOrigins,
				vaccines,
				setVaccines,
				options,
				setOptions,
				timeUnit,
				setTimeUnit,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};
