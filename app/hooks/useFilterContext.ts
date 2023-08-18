import {
	Breed,
	Country,
	Gender,
	SaleType,
	Species,
	Vaccine,
} from '@prisma/client';
import React, { useContext } from 'react';
import { SafePet, TimeUnit } from '../types';

export const FilterContext = React.createContext<{
	allPets: Array<SafePet>;
	allSpecies: Array<Species>;
	allBreeds: Array<Breed>;
	allOrigins: Array<Country>;
	allVaccines: Array<Vaccine>;
	medicalOptions: Array<OptionsType>;
	otherOptions: Array<OptionsType>;
	saleType: SaleType | '';
	setSaleType: (e: SaleType | '') => void;
	species: Array<Species>;
	setSpecies: (e: Array<Species>) => void;
	breeds: Array<Breed>;
	setBreeds: (e: Array<Breed>) => void;
	minPrice: number;
	setMinPrice: (e: number) => void;
	maxPrice: number;
	setMaxPrice: (e: number) => void;
	minAge: number;
	setMinAge: (e: number) => void;
	maxAge: number;
	setMaxAge: (e: number) => void;
	gender: Gender | '';
	setGender: (e: Gender | '') => void;
	origins: Array<Country>;
	setOrigins: (e: Array<Country>) => void;
	vaccines: Array<Vaccine>;
	setVaccines: (e: Array<Vaccine>) => void;
	options: Array<string>;
	setOptions: (e: Array<string>) => void;
	timeUnit: TimeUnit;
	setTimeUnit: (e: TimeUnit) => void;
}>({
	allPets: [],
	allSpecies: [],
	allBreeds: [],
	allOrigins: [],
	allVaccines: [],
	medicalOptions: [],
	otherOptions: [],
	saleType: '',
	setSaleType: () => {},
	species: [],
	setSpecies: () => {},
	breeds: [],
	setBreeds: () => {},
	minPrice: 0,
	setMinPrice: () => {},
	maxPrice: 0,
	setMaxPrice: () => {},
	minAge: 0,
	setMinAge: () => {},
	maxAge: 0,
	setMaxAge: () => {},
	gender: '',
	setGender: () => {},
	origins: [],
	setOrigins: () => {},
	vaccines: [],
	setVaccines: () => {},
	options: [],
	setOptions: () => {},
	timeUnit: 'months',
	setTimeUnit: () => {},
});

export const useFilterContext = () => useContext(FilterContext);

type OptionsType = {
	field: string;
	label: string;
};
