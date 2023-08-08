import { NextResponse } from 'next/server';

import getPets from '@/app/actions/getPets';
import { getRandom, getRandomDate } from '@/app/components/developer/utils';
import prisma from '@/app/libs/prismadb';

const vaccineNames = [
	'Rabies',
	'Covid-19',
	'Distemper',
	'Parovirus',
	'Adenovirus (Canine Hepatitis)',
	'Bordetella (Kennel Cough)',
];

export async function POST(request: Request) {
	const pets = await getPets({});

	const body = pets.map((pet) => {
		const takenAt = getRandomDate(new Date(pet.birthday));
		const expiresAt = new Date(takenAt);
		expiresAt.setFullYear(takenAt.getFullYear() + 2);

		return {
			petId: pet.id,
			name: getRandom(vaccineNames),
			takenAt: takenAt,
			expiresAt: expiresAt,
		};
	});

	const vaccines = await prisma.vaccine.createMany({
		data: body,
	});

	return NextResponse.json(vaccines);
}
