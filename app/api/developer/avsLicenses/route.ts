import { NextResponse } from 'next/server';

import getPets from '@/app/actions/getPets';
import {
	getRandomDate,
	getRandomLicenseNumber,
} from '@/app/components/developer/utils';
import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
	const pets = await getPets({});

	const body = pets.map((pet) => {
		const issuedAt = getRandomDate(new Date(pet.birthday));
		const expiresAt = new Date(issuedAt);
		expiresAt.setFullYear(issuedAt.getFullYear() + 5);

		return {
			petId: pet.id,
			licensee: 'The dude who licenses this',
			licenseNumber: getRandomLicenseNumber(),
			issuedAt: issuedAt,
			expiresAt: expiresAt,
		};
	});

	const avsLicenses = await prisma.avsLicense.createMany({
		data: body,
	});

	return NextResponse.json(avsLicenses);
}
