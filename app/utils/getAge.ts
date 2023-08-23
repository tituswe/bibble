import { SafePet, TimeUnit } from '../types';

interface IParams {
	data: SafePet;
}

export function getAgeInMonths(pet: SafePet): number {
	const today = new Date();
	const birthDate = new Date(pet.birthday);
	let ageInMonths = (today.getFullYear() - birthDate.getFullYear()) * 12;
	ageInMonths += today.getMonth() - birthDate.getMonth();

	if (today.getDate() < birthDate.getDate()) {
		ageInMonths--;
	}

	return ageInMonths;
}

export function formatAge(age: number, timeUnit: TimeUnit): number {
	return timeUnit === 'months' ? age : Math.floor(age / 12);
}

export default function getAgeLabel(params: IParams): string {
	const { data } = params;

	const today = new Date();
	const birthDate = new Date(data.birthday);
	let ageInMonths = (today.getFullYear() - birthDate.getFullYear()) * 12;
	ageInMonths += today.getMonth() - birthDate.getMonth();

	if (today.getDate() < birthDate.getDate()) {
		ageInMonths--;
	}

	const ageInDays = Math.floor(
		(today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24)
	);

	if (ageInMonths >= 12) {
		const ageInYears = Math.floor(ageInMonths / 12);
		return ageInYears === 1 ? `${ageInYears} Year` : `${ageInYears} Years`;
	} else if (ageInMonths >= 1) {
		return ageInMonths === 1 ? `${ageInMonths} Month` : `${ageInMonths} Months`;
	} else {
		return ageInDays === 1 ? `${ageInDays} Day` : `${ageInDays} Days`;
	}
}
