import prisma from '@/app/libs/prismadb';

export interface IPetsParams {
	userId?: string;
	breed?: string;
	gender?: string;
	ageRange?: Range;
	postedAtRange?: Range;
}

export default async function getPets(params: IPetsParams) {
	try {
		const { userId, breed, gender, ageRange, postedAtRange } = params;

		let query: any = {};

		if (userId) {
			query.userId = userId;
		}

		if (breed) {
			query.breed = breed;
		}

		if (gender) {
			query.gender = gender;
		}

		if (ageRange) {
			// TODO: TO IMPLEMENT
		}

		if (postedAtRange) {
			// TODO: TO IMPLEMENT
		}

		const pets = await prisma.pet.findMany({
			where: query,
			orderBy: {
				postedAt: 'desc',
			},
		});

		const safePets = pets.map((pet) => ({
			...pet,
			birthday: pet.birthday.toISOString(),
			postedAt: pet.postedAt.toISOString(),
		}));

		return safePets;
	} catch (error: any) {
		throw new Error(error);
	}
}
