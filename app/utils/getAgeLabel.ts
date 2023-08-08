import { SafePet } from '../types';

interface IParams {
	data: SafePet;
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
		return `${ageInYears} Years`;
	} else if (ageInMonths >= 1) {
		return `${ageInMonths} Months`;
	} else {
		return `${ageInDays} Days`;
	}
}
