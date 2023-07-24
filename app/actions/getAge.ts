import { SafePet } from '../types';

interface IParams {
	data: SafePet;
}

export default function getAge(params: IParams) {
	const { data } = params;

	const today = new Date();
	const birthDate = new Date(data.birthday);
	let age = today.getFullYear() - birthDate.getFullYear();
	const m = today.getMonth() - birthDate.getMonth();

	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}

	return age;
}
