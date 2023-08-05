import prisma from '@/app/libs/prismadb';

export interface IPetsParams {
	userId?: string;
	breed?: string;
	gender?: string;
	startDate?: string;
	endDate?: string;
}

export default async function getPets(params: IPetsParams) {
	try {
		const { userId, breed, gender, startDate, endDate } = params;

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

		if (startDate && endDate) {
			query = {
				AND: [
					{
						birthday: { gte: startDate },
					},
					{
						birthday: { lte: endDate },
					},
				],
			};
		}

		const pets = await prisma.pet.findMany({
			where: query,
			orderBy: {
				postedAt: 'desc',
			},
			include: {
				species: true,
				breed: true,
				origin: true,
				lister: true,
			},
		});

		const safePets = pets.map((pet) => ({
			...pet,
			birthday: pet.birthday.toISOString(),
			postedAt: pet.postedAt.toISOString(),
			user: {
				...pet.lister,
				createdAt: pet.lister.createdAt.toISOString(),
				updatedAt: pet.lister.updatedAt.toISOString(),
				emailVerified: pet.lister.emailVerified?.toISOString() || null,
			},
		}));

		return safePets;
	} catch (error: any) {
		throw new Error(error);
	}
}
