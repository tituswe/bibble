import { SafePet } from '../types';
import { getAgeInMonths } from '../utils/getAge';

export const useAgeRange = (pets: Array<SafePet>) => {
	if (pets.length === 0) {
		return { MIN_AGE: 0, MAX_AGE: 0 };
	}

	const firstPet = pets[0];
	let MIN_AGE = getAgeInMonths(firstPet);
	let MAX_AGE = getAgeInMonths(firstPet);

	pets.forEach((pet) => {
		const age = getAgeInMonths(pet);
		MIN_AGE = Math.min(age, MIN_AGE);
		MAX_AGE = Math.max(age, MAX_AGE);
	});

	return { MIN_AGE, MAX_AGE };
};
