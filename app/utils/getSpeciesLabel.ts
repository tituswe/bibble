import { Species } from '@prisma/client';
import { SafePet } from '../types';

const speciesMap: Record<string, string> = {
	Dog: 'Puppy',
	Cat: 'Kitten',
};

interface IParams {
	data: SafePet & {
		species: Species;
	};
}

export default function getSpeciesLabel(params: IParams) {
	const { data } = params;

	const today = new Date();
	const birthDate = new Date(data.birthday);
	let ageInMonths = (today.getFullYear() - birthDate.getFullYear()) * 12;
	ageInMonths += today.getMonth() - birthDate.getMonth();

	if (today.getDate() < birthDate.getDate()) {
		ageInMonths--;
	}

	return ageInMonths >= 12 ? data.species.name : speciesMap[data.species.name];
}
